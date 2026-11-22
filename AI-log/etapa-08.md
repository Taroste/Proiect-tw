# AI Log - Etapa 8: Navigare și stilizare pe componente

## Instrumente AI utilizate
- **Gemini**: Configurarea rutelor cu React Router, crearea layout-ului comun și a paginilor (`ProgramariPage`, `ProgramareDetaliuPage`, `DesprePage`, `NotFoundPage`), precum și separarea stilurilor în CSS Modules.

## Prompts & Interacțiuni
1. **Prompt React Router & Layout:** "Cum configurez `BrowserRouter` și `Routes` cu un `Layout` comun (`NavLink` + `Outlet`) pentru rutele `/`, `/programari/:id`, `/despre` și `*`?"
   - *Rezultat:* Am înconjurat aplicația cu `BrowserRouter` în `main.jsx`, am definit harta rutelor în `App.jsx` și am creat `Layout.jsx` cu navigația și controalele globale.
2. **Prompt Pagina de Detaliu & 404:** "Cum citesc parametrul `id` cu `useParams()` în `ProgramareDetaliuPage.jsx` și cum tratez un ID inexistent (`404`)?"
   - *Rezultat:* Am adăugat `fetchProgramare(id)` în `api.js` și am afișat detaliile programării (inclusiv cabinetul, medicul și protocolul aferent specialității), respectiv un mesaj de eroare cu link de întoarcere pentru ID-uri invalide.
3. **Prompt CSS Modules:** "Cum reorganizez stilurile globale în `src/index.css` și stilurile specifice în fișiere `*.module.css`?"
   - *Rezultat:* Am extras constantele în `src/constants.js`, am păstrat variabilele și clasele comune în `src/index.css` și am creat module CSS dedicate pentru fiecare componentă și pagină.