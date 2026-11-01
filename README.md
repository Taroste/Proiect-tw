# MedClinic
A web application to manage medical clinic patient appointments and consultation records.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| patientName | text | required, max 100 chars |
| completed | boolean | toggled from the list, default false |
| specialty | fixed values | Cardiologie, Neurologie, Pediatrie |
| category | relation | Routine, Emergency, Follow-up |
| user | relation | the doctor/owner of the record |

### Sample data used:
1. Popescu Ion (Consult cardiologie), active, Cardiologie
2. Ionescu Maria (Control pediatrie), done, Pediatrie
3. Vasilescu Dan (Ecografie neurologie), active, Neurologie

## AI usage
| Tool | Used for |
| --- | --- |
| ChatGPT | Initial project setup & structure ideas |
| Gemini | Debugging, guidance on HTML structure, CSS Layout, and custom keyframe animations |
| Gemini | Technical guidance on immutable array patterns in JS, React state hooks (`useState`, `useEffect`), and thematic UI styling |

# Project Stages & Implementation

### Stage 1: Static Mockup (HTML & CSS)
- **Structure:** Built using semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<form>`, `<ul>`, `<footer>`) to ensure accessibility and clean document hierarchy.
- **Layout:** Implemented responsive design using **CSS Grid** for the main two-column layout (`1fr 2fr`) and **Flexbox** for internal components and card alignments (`justify-content: space-between`).
- **Styling & Theme:** All colors are centralized as CSS custom properties (`:root`) supporting a native **Dark Mode** via `@media (prefers-color-scheme: dark)` and clear focus indicators (`:focus-visible`) for keyboard navigation.

### Stage 2: Data Logic (JavaScript)
- **Core Logic:** Migrated the dataset into a pure JavaScript array of objects (`medclinic.js`) operating independently of the DOM.
- **Immutability:** Implemented functional programming principles using native array methods (`map`, `filter`, `find`, `reduce`) and the spread operator (`...`) to ensure original data structures remain unaltered.
- **Validation & Features:** Added robust input validation (rejecting empty names or invalid medical specialties), dynamic ID generation, search filtering, status toggling, and record deletion. All outputs are verified directly via the browser's developer console (`F12`).

### Stage 3: Tooling & React Setup (Vite + React)
- **Environment:** Bootstrapped the project using **Vite** with React, structuring the code under the `frontend/` directory.
- **Component Decomposition:** Refactored the monolithic static HTML into modular React components (`App`, `ProgramariList`, `ItemCard`).
- **Build System:** Configured modern ES modules, Fast Refresh, and organized project assets for efficient development.

### Stage 4: Components & Dynamic Rendering (Props & Lists)
- **Data Flow:** Implemented unidirectional data flow passing patient records from `App.jsx` down to `ProgramariList` and `ItemCard` via `props`.
- **List Mapping:** Utilized `.map()` with unique `key` identifiers to dynamically render appointment cards.
- **Conditional Formatting:** Applied strike-through styling and checkmark toggles for completed consultations, along with specialty tags (`Cardiologie`, `Pediatrie`, `Neurologie`).

### Stage 5: State Management, Events & Thematic Interactivity (`useState`, `useEffect`)
- **Local State Management:** Utilized `useState` for managing patient list mutations, theme modes (Light/Dark), emergency state (`urgenta`), and reception break state (`pauza`).
- **Immutable State Updates:** Handled status toggling (`handleToggle`) and record removal (`handleDelete`) using functional state updates (`map` and `filter`).
- **Global Side Effects:** Integrated `useEffect` to attach global CSS classes (`cod-rosu`) on `document.body` for emergency visual overlays.
- **Thematic Polish ("Run-down Hospital" Aesthetic):**
  - **3D Tiled Background:** Dynamic background wall tile texture (`faianta`) that adapts size, brightness, and texture per theme mode (Light vs Dark).
  - **Flickering Neon Header:** 3D tube neon light with realistic glass gradient, chrome mounting brackets, and subtle flickering keyframe animations.
  - **Emergency "Cod Roșu" Mode:** Fullscreen animated ambulance vignette effect with pulsing red/blue edge glows and high-contrast card borders.
  - **Reception Break ("Pauză de masă"):** Interactive toggle suspending clinic counter activities and rendering fallback status UI.
  - **Live LED Status Indicator:** Dynamic header LED pulsating green (Operational), orange (On Break), or flashing red (Emergency).

Details per stage: see the `ai-log/` folder.

## How to run
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open the local URL displayed in the terminal (e.g., `http://localhost:5173`).

## Status
- [x] Stage 1: Static mockup
- [x] Stage 2: Data logic & immutable functions (JavaScript)
- [x] Stage 3: Tooling & React project setup (Vite + React)
- [x] Stage 4: Components & dynamic rendering (Props & Lists)
- [x] Stage 5: State management, events & thematic interactivity (useState, useEffect)


## Checklist Stage 1 & 2
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/README.md?plain=1#L1-L20 | read |
| S1-R2 | AI usage section | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/README.md?plain=1#L22-L28 | read |
| S1-R3 | AI log for stage 1 | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/AI-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/index.html#L1-L60 | open the page |
| S1-R5 | finished card looks different | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/style.css#L130-L138 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/style.css#L150-L156 | resize < 700px |
| S1-R7 | visible focus, readable dark theme | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/style.css#L143-L167 | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | https://github.com/Taroste/Proiect-tw/commit/2771a6e889c1205d8962e7bf0e142aa960b5aee7 | commit history |
| S2-R1 | JS file linked, logs on page load | https://github.com/Taroste/Proiect-tw/blob/052cc594e84da944f2864fd2394bec2d2fe8b73c/index.html#L55-L60 | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | https://github.com/Taroste/Proiect-tw/blob/052cc594e84da944f2864fd2394bec2d2fe8b73c/taskuri.js#L1-L10 | read |
| S2-R3 | list, count, search, add, toggle, delete | https://github.com/Taroste/Proiect-tw/blob/052cc594e84da944f2864fd2394bec2d2fe8b73c/taskuri.js#L12-L65 | console output |
| S2-R4 | add rejects empty name and invalid tag | https://github.com/Taroste/Proiect-tw/blob/052cc594e84da944f2864fd2394bec2d2fe8b73c/taskuri.js#L35-L50 | last 2 console lines |
| S2-R5 | original array unchanged after add | https://github.com/Taroste/Proiect-tw/blob/052cc594e84da944f2864fd2394bec2d2fe8b73c/taskuri.js#L75-L85 | console line |
| S2-R6 | README Stage 2 section + AI log | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/AI-log/etapa-02.md | read |
| S2-R7 | commit "Stage 2" pushed | https://github.com/Taroste/Proiect-tw/commit/052cc594e84da944f2864fd2394bec2d2fe8b73c | commit history |
| S3-R1 | React project setup with Vite in `frontend/` | https://github.com/Taroste/Proiect-tw/blob/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/frontend/package.json | run `npm run dev` |
| S3-R2 | Component structure (`App`, `ProgramariList`, `ItemCard`) | https://github.com/Taroste/Proiect-tw/tree/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/frontend/src | inspect `src/` folder |
| S3-R3 | AI log for stage 3 | https://github.com/Taroste/Proiect-tw/blob/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/AI-log/etapa-03.md | read |
| S4-R1 | Dynamic list rendering using `.map()` with unique `key` | https://github.com/Taroste/Proiect-tw/blob/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/frontend/src/components/ProgramariList.jsx | inspect JSX code |
| S4-R2 | Unidirectional props passing down component tree | https://github.com/Taroste/Proiect-tw/blob/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/frontend/src/App.jsx | inspect props |
| S4-R3 | AI log for stage 4 | https://github.com/Taroste/Proiect-tw/blob/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/AI-log/etapa-04.md | read |
| S5-R1 | Local state managed via `useState` for CRUD operations | https://github.com/Taroste/Proiect-tw/blob/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/frontend/src/App.jsx | test toggle / delete |
| S5-R2 | Event handling for item deletion and completion toggling | https://github.com/Taroste/Proiect-tw/blob/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/frontend/src/App.jsx | click check / delete |
| S5-R3 | Side-effects handling via `useEffect` for global DOM classes | https://github.com/Taroste/Proiect-tw/blob/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/frontend/src/App.jsx | click "Cod Roșu" |
| S5-R4 | AI log for stage 5 | https://github.com/Taroste/Proiect-tw/blob/b56f1c85de15ed62136b308f3d57eeb6d503f5d7/AI-log/etapa-05.md | read |