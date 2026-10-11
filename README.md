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
| ChatGPT | Project setup |
| Gemini | Debugging , guidance on HTML structure and CSS Layout|
| Gemini | Assisting with technical guidance,immutable array patterns in JavaScript, and documentation formatting 


# Project Stages & Implementation

### Stage 1: Static Mockup (HTML & CSS)
* **Structure:** Built using semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<form>`, `<ul>`, `<footer>`) to ensure accessibility and clean document hierarchy.
* **Layout:** Implemented responsive design using **CSS Grid** for the main two-column layout (`1fr 2fr`) and **Flexbox** for internal components and card alignments (`justify-content: space-between`).
* **Styling & Theme:** All colors are centralized as CSS custom properties (`:root`) supporting a native **Dark Mode** via `@media (prefers-color-scheme: dark)` and clear focus indicators (`:focus-visible`) for keyboard navigation.

### Stage 2: Data Logic (JavaScript)
* **Core Logic:** Migrated the dataset into a pure JavaScript array of objects (`medclinic.js`) operating independently of the DOM.
* **Immutability:** Implemented functional programming principles using native array methods (`map`, `filter`, `find`, `reduce`) and the spread operator (`...`) to ensure original data structures remain unaltered.
* **Validation & Features:** Added robust input validation (rejecting empty names or invalid medical specialties), dynamic ID generation, search filtering, status toggling, and record deletion. All outputs are verified directly via the browser's developer console (`F12`).


Details per stage: see the `ai-log/` folder.

## How to run
Open `index.html` in a browser.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: Data logic & immutable functions (JavaScript)

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
S2-R1** | JS file linked, logs on page load | [index.html](https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/index.html) | Open page, check F12 console |
| **S2-R2** | 3+ items with id, name, state, tag | [taskuri.js](https://github.com/Taroste/Proiect-tw/blob/052cc594e84da944f2864fd2394bec2d2fe8b73c/taskuri.js) | Inspect source array |
| **S2-R3** | List, count, search, add, toggle, delete | [taskuri.js](https://github.com/Taroste/Proiect-tw/blob/052cc594e84da944f2864fd2394bec2d2fe8b73c/taskuri.js) | Review console output sections |
| **S2-R4** | Add rejects empty name and invalid tag | [taskuri.js](https://github.com/Taroste/Proiect-tw/blob/052cc594e84da944f2864fd2394bec2d2fe8b73c/taskuri.js) | Check console error logs |
| **S2-R5** | Original array unchanged after add | [taskuri.js](https://github.com/Taroste/Proiect-tw/blob/052cc594e84da944f2864fd2394bec2d2fe8b73c/taskuri.js) | Verify immutability check in console |
| **S2-R6** | README Stage 2 section + AI log | [README.md / AI-log](https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/AI-log/etapa-02.md) | Read documentation |
| **S2-R7** | Commit "Stage 2" pushed | [Commit History](https://github.com/Taroste/Proiect-tw/commit/052cc594e84da944f2864fd2394bec2d2fe8b73c) | Check GitHub commit log |