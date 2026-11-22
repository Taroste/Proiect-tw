# AI Log - Etapa 6: Date de la un API (`useEffect`)

## Instrumente AI utilizate
- **Gemini**: Configurare `json-server`, separarea stratului de rețea în `src/api.js` și gestionarea stărilor asincrone în React.

## Prompts & Interacțiuni
1. **Prompt Mock API:** "Cum configurez `json-server@0.17.4` cu `db.json` pentru resursa `programari` pe portul 3001?"
   - *Rezultat:* Am instalat `json-server@0.17.4` ca `devDependency`, am creat `frontend/db.json` cu 5 programări variate și am adăugat scriptul `"api"` în `package.json`.
2. **Prompt `api.js` & Variabile de Mediu:** "Cum izolez cererile `fetch` într-un modul separat `src/api.js` citind adresa din `VITE_API_URL` și verificând `res.ok`?"
   - *Rezultat:* Am creat `src/api.js` cu funcția `fetchProgramari()` și fișierul `frontend/.env.example`.
3. **Prompt Stări Asincrone (`useEffect`):** "Cum încarc datele la montarea componentei tratând stările `loading`, `error` și curățarea efectului cu `ignore`?"
   - *Rezultat:* Am înlocuit lista hardcodată cu `useState([])`, am implementat blocul `try / catch / finally` în `useEffect` și am randat condiționat mesajele de încărcare și eroare.