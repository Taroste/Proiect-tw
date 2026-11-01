# AI Log - Etapa 2: Logica de Date (JavaScript Imutabil)

## Instrumente AI utilizate
- **Gemini**: Orientare pe funcții imutabile și validări de date în Vanilla JS.

## Prompts & Interacțiuni
1. **Prompt Structură Date:** "Definește un array JS de obiecte pentru pacienți, fiecare având id, titlu, stare (completat/necompletat) și specialitate."
   - *Rezultat:* Am creat dataset-ul inițial în `medclinic.js`.
2. **Prompt Operații Imutabile:** "Scrie funcții JS pure pentru adăugare, bifare și ștergere fără a modifica tablou-ul original (fără `push` sau `splice`)."
   - *Rezultat:* Am primit și adaptat utilizarea operatorului spread (`...`), `.map()` și `.filter()`.
3. **Prompt Validare:** "Cum validez ca numele să nu fie gol și specialitatea să aparțină unei liste fixe?"
   - *Rezultat:* Am adăugat condiții `if (!titlu.trim())` și verificări cu `.includes()`.