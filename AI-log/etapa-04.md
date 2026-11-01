# AI Log - Etapa 4: Componente și Randare Dinamică (Props & Liste)

## Instrumente AI utilizate
- **Gemini**: Transmitere unidirecțională de props și randare dinamică cu `.map()`.

## Prompts & Interacțiuni
1. **Prompt Randare Liste:** "Cum randez o listă de obiecte `pacienti` în React folosind `.map()` și chei unice (`key`)?"
   - *Rezultat:* Am implementat `.map((p) => <ItemCard key={p.id} ... />)` în `ProgramariList.jsx`.
2. **Prompt Trecere Props:** "Cum transmit datele și handler-ele de la `App` la `ProgramariList` și apoi la `ItemCard`?"
   - *Rezultat:* Am configurat fluxul unidirecțional de props (`programari`, `onToggle`, `onDelete`).