# AI Log - Etapa 7: Formular și validare (CRUD complet)

## Instrumente AI utilizate
- **Gemini**: Implementarea formularului controlat (`ProgramareForm`), extinderea stratului HTTP (`POST`, `PATCH`, `DELETE`) în `src/api.js` și pregătirea pentru verificarea automată (`tw.json`, `data-testid`).

## Prompts & Interacțiuni
1. **Prompt `api.js` CRUD:** "Cum creez o funcție comună `request()` în `api.js` care adaugă antetul JSON, verifică `res.ok`, tratează răspunsurile `204 No Content` și expune `createProgramare`, `updateProgramare` și `deleteProgramare`?"
   - *Rezultat:* Am refactorizat `frontend/src/api.js` cu funcția comună `request()` și metodele aferente operațiilor CRUD.
2. **Prompt Formular Controlat & Validare:** "Cum scriu componenta `ProgramareForm.jsx` cu câmpuri controlate, validare locală (câmp obligatoriu, maximum 100 caractere), dezactivarea butonului la trimitere și păstrarea textului la eroare?"
   - *Rezultat:* Am creat `ProgramareForm.jsx` folosind `e.preventDefault()`, stările `eroare` și `trimite`, și resetarea câmpurilor doar după confirmarea salvării de către server.
3. **Prompt Verificare Automată:** "Ce structură trebuie să aibă `tw.json` și ce atribute `data-testid` trebuie adăugate în componente pentru tema MedClinic?"
   - *Rezultat:* Am creat `tw.json` în rădăcina repository-ului cu resursa `programari` și am marcat elementele din formular, carduri și listă cu `data-testid`.