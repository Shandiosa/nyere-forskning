# Nyere forskning

Intern-nettside for Consort: avstemninger, skalaundersøkelser og gjettekonkurranser med tvilsom metodikk.

## Innhold

- `index.html` – redirect til appen (gjør at GitHub Pages funker rett ut av boksen)
- `Nyere Forskning.dc.html` – hele appen (innlogging, forside, besvarelse, resultater, «Sånn er Consort», admin)
- `support.js` – runtime som kjører appen
- `_ds/` – Consort designsystem (farger, fonter, komponenter)
- `assets/` – logoer og dots-ornamenter
- `supabase/schema.sql` – databaseskjema klart til å kjøres i Supabase SQL Editor

## Publisere på GitHub Pages

1. Lag et repo og push hele mappa.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Siden ligger på `https://<bruker>.github.io/<repo>/`.

## Koble til Supabase

Prototypen kjører i dag på data i minnet (alt nullstilles ved refresh). For å gjøre den «ekte»:

1. Opprett et Supabase-prosjekt og kjør `supabase/schema.sql` i SQL Editor.
2. Skru på **Auth → Email** (epost + passord). Begrens gjerne til `@consort.no` med en «Restrict sign-ups»-hook eller sjekk i appen.
3. Legg inn `SUPABASE_URL` og `SUPABASE_ANON_KEY` i appen og bytt ut minne-operasjonene:
   - Innlogging → `supabase.auth.signInWithPassword` / `signUp`
   - Førstegangsregistrering → insert i `profiles`
   - Brukerliste/redigering (admin) → select/update på `profiles`
   - Nullstill passord → `supabase.auth.resetPasswordForEmail`
   - Undersøkelser → `polls`-tabellen, svar → `responses`
   - «Én stemme per bruker» håndheves av unique-constrainten i `responses`
4. Bilder til undersøkelser: opprett en public Storage-bucket `poll-images` og lim inn URL-en i «Bilde-URL»-feltet, eller bygg opplasting med `supabase.storage`.

Admin er `holmen@consort.no` (flagget `is_admin` i `profiles`).
