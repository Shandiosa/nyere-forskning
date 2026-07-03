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

## Supabase — allerede koblet på

Appen er nå koblet til Supabase-prosjektet (URL + anon-nøkkel ligger øverst i logikken i `Nyere Forskning.dc.html`). Anon-nøkkelen er trygg å ha åpent på GitHub; det er RLS-policyene i `schema.sql` som beskytter dataene.

Det som gjenstår for at det skal virke:

1. **Kjør databaseskjemaet.** Åpne Supabase → SQL Editor → lim inn hele `supabase/schema.sql` → Run. Dette lager `profiles`, `polls` og `responses`, RLS-policyene, og en trigger som auto-oppretter profil ved første innlogging.
2. **Skru på e-post + passord.** Authentication → Sign In / Providers → skru på **Email**.
3. **Skru AV e-postbekreftelse** (viktig for at «logg inn = opprett konto første gang» skal gå smertefritt): Authentication → Providers → Email → skru av **Confirm email**. Med bekreftelse på må hver bruker klikke en lenke i e-posten før de kommer inn.
4. **Begrens til @consort.no** (valgfritt): appen nekter allerede innlogging uten `@consort.no`. Vil du stenge helt, skru av «Allow new users to sign up» og inviter folk manuelt under Authentication → Users.

### Hva som er koblet i appen
- Innlogging: `signInWithPassword`; finnes ikke brukeren, opprettes den med `signUp` (fornavn autogenereres og lagres i `user_metadata`, profil-raden lages av trigger).
- Førstegangsregistrering (avdeling/fødselsår/kjønn) → `update` på `profiles`.
- Svar → `insert` i `responses`; «én stemme per bruker» håndheves av unique-constrainten `(poll_id, user_id)`.
- Admin: publiser/lukk/gjenåpne undersøkelser (`polls`), skriv «funn»-tekst ved lukking, live-liste over innkomne svar (auto-oppdateres hvert 8. sek), rediger brukere (`profiles`) og send tilbakestilling av passord (`resetPasswordForEmail`).

### Bilder på undersøkelser
Lim inn en offentlig bilde-URL i «Bilde-URL»-feltet når du oppretter en undersøkelse. Vil du laste opp bilder direkte: lag en public Storage-bucket i Supabase og lim inn den offentlige URL-en, eller be om at opplasting bygges inn med `supabase.storage`.

Admin er `holmen@consort.no` (flagget `is_admin` settes automatisk for den adressen).
