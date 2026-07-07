-- Nyere forskning · Supabase-skjema
-- Kjør i Supabase SQL Editor. Auth (epost+passord) håndteres av Supabase Auth;
-- profiles utvider auth.users med appens felter.

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  epost text unique not null,
  fornavn text not null,            -- autogenerert: "jan.e.holmen@" -> "Jan EH"
  kjonn text check (kjonn in ('K', 'M', 'A')),
  fodselsaar int,
  avdeling text check (avdeling in ('Trondheim', 'Oslo', 'Göteborg')),
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.polls (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('flervalg', 'skala', 'gjett', 'duell')),
  status text not null default 'aktiv' check (status in ('aktiv', 'lukket')),
  tittel text not null,
  bilde_url text,
  options jsonb,                    -- flervalg/duell: ["Alt A", "Alt B", ...]
  option_images jsonb,             -- duell: ["url til A", "url til B"] (samme rekkefølge som options)
  skala_lo text,                    -- skala: etikett for 1
  skala_hi text,                    -- skala: etikett for 10
  enhet text,                       -- gjett: f.eks. "kopper"
  fasit numeric,                    -- gjett: hemmelig til status = 'lukket'
  premie text,
  funn text,                        -- tabloid-overskrift, vises når lukket
  created_at timestamptz not null default now()
);

create table public.responses (
  id uuid primary key default gen_random_uuid(),
  poll_id uuid not null references public.polls (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  verdi numeric not null,           -- flervalg: option-indeks, skala: 1-10, gjett: tallet
  created_at timestamptz not null default now(),
  unique (poll_id, user_id)         -- én stemme per bruker
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.polls enable row level security;
alter table public.responses enable row level security;

create function public.is_admin() returns boolean
language sql stable security definer as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

-- profiles: alle innloggede kan lese (trengs for ledertavle/nedbrytning),
-- egen rad kan opprettes/endres, admin kan endre alle
create policy "les profiler" on public.profiles for select to authenticated using (true);
create policy "opprett egen profil" on public.profiles for insert to authenticated with check (id = auth.uid());
create policy "endre egen profil eller admin" on public.profiles for update to authenticated
  using (id = auth.uid() or public.is_admin());

-- polls: alle innloggede leser, kun admin skriver
create policy "les polls" on public.polls for select to authenticated using (true);
create policy "admin skriver polls" on public.polls for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- responses: alle innloggede kan lese alle svar, slik at aggregerte resultater
-- og demografisk nedbrytning fungerer live (appen viser aldri navn på polls/skala).
-- NB: dette gjør at en teknisk kyndig bruker i teori kan koble svar til bruker.
-- Vil du ha KLINISK anonymitet, bytt denne policyen til å kun tillate eget svar +
-- admin + lukkede polls, og hent aggregater via egne security-definer RPC-funksjoner.
create policy "les svar" on public.responses for select to authenticated using (true);
create policy "lever svar" on public.responses for insert to authenticated
  with check (
    user_id = auth.uid()
    and exists (select 1 from public.polls p where p.id = poll_id and p.status = 'aktiv')
  );

-- Autoopprett profil ved første innlogging (fornavn genereres i appen og
-- sendes som user_metadata ved signUp)
create function public.handle_new_user() returns trigger
language plpgsql security definer as $$
begin
  insert into public.profiles (id, epost, fornavn, is_admin)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'fornavn', initcap(split_part(new.email, '@', 1))),
    new.email = 'holmen@consort.no'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
