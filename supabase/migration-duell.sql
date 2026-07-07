-- Migrering for Duell-kategorien.
-- Kjør denne i Supabase SQL Editor HVIS du allerede har kjørt schema.sql tidligere.
-- (Har du ikke opprettet tabellene ennå, hold deg til schema.sql; den er allerede oppdatert.)
-- Trygg å kjøre flere ganger.

alter table public.polls drop constraint if exists polls_type_check;
alter table public.polls add constraint polls_type_check
  check (type in ('flervalg', 'skala', 'gjett', 'duell'));

alter table public.polls add column if not exists option_images jsonb;
