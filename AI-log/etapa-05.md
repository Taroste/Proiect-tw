# AI Log - Etapa 5: Stări, Evenimente și Tematică Interactivă (`useState`, `useEffect`)

## Instrumente AI utilizate
- **Gemini**: Management de stare locală, efecte globale pe DOM și stilizare tematică avansată în CSS.

## Prompts & Interacțiuni
1. **Prompt React State (`useState`):** "Cum gestionez starea listei de pacienți, tema (Light/Dark), modul 'Cod Roșu' și modul 'Pauză de masă'?"
   - *Rezultat:* Am implementat hooks `useState` în `App.jsx` pentru fiecare funcționalitate interactivă.
2. **Prompt Side Effects (`useEffect`):** "Cum aplic o clasă globală `cod-rosu` pe `document.body` doar când modul de urgență este activat?"
   - *Rezultat:* Am adăugat un `useEffect` cu dependency array `[urgenta]`.
3. **Prompt Design Tematic Spital de Stat:** "Cum creez un fundal interactiv de faianță 3D cu moduri Light/Dark, un tub de neon fizic cu animație de pâlpâire și efect de girofar de ambulanță pe tot ecranul fără să spăl culorile?"
   - *Rezultat:* Am dezvoltat un set avansat de reguli CSS (`body::before`, `body::after`, `keyframe animations`, `box-shadow inset`) adaptat pe variabile dinamic schimbate din React.