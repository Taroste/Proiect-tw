# AI Log - Etapa 1: Mockup Static (HTML & CSS)

## Instrumente AI utilizate
- **ChatGPT / Gemini**: Structurare HTML semantic și layout CSS responsive.

## Prompts & Interacțiuni
1. **Prompt HTML:** "Generează o structură HTML5 semantică pentru o aplicație de gestionare a programărilor medicale (MedClinic) care să conțină antet, formular de adăugare și listă de carduri."
   - *Rezultat:* Am primit un mockup curat cu `<header>`, `<main>`, `<section>`, `<form>` și `<ul>`.
2. **Prompt CSS Layout:** "Cum creez un layout responsive pe 2 coloane cu CSS Grid care să treacă la 1 singură coloană pe ecrane sub 700px?"
   - *Rezultat:* Am implementat `grid-template-columns: 1fr 2fr` cu un `@media (max-width: 700px)`.
3. **Prompt Temă & Accesibilitate:** "Cum definesc variabile CSS `:root` pentru Dark Mode automată și contur vizibil la navigarea cu Tab?"
   - *Rezultat:* Am adăugat `@media (prefers-color-scheme: dark)` și `:focus-visible`.