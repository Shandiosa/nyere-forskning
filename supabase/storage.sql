-- Supabase Storage for bildeopplasting i «Nyere forskning».
-- Kjør i SQL Editor ETTER schema.sql. Trygg å kjøre flere ganger.

-- 1) Public bucket for undersøkelses-bilder
insert into storage.buckets (id, name, public)
values ('poll-images', 'poll-images', true)
on conflict (id) do update set public = true;

-- 2) Alle kan lese bildene (bucket er offentlig)
drop policy if exists "poll-images lesbar" on storage.objects;
create policy "poll-images lesbar" on storage.objects
  for select to public
  using (bucket_id = 'poll-images');

-- 3) Kun innloggede kan laste opp / endre / slette
drop policy if exists "poll-images opplasting" on storage.objects;
create policy "poll-images opplasting" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'poll-images');

drop policy if exists "poll-images endring" on storage.objects;
create policy "poll-images endring" on storage.objects
  for update to authenticated
  using (bucket_id = 'poll-images');

drop policy if exists "poll-images sletting" on storage.objects;
create policy "poll-images sletting" on storage.objects
  for delete to authenticated
  using (bucket_id = 'poll-images');
