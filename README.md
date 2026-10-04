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

Details per stage: see the `ai-log/` folder.

## How to run
Open `index.html` in a browser.

## Status
- [x] Stage 1: static mockup

## Checklist Stage 1
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/<user>/<repo>/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/<user>/<repo>/blob/main/README.md#ai-usage) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/<user>/<repo>/blob/main/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html](https://github.com/<user>/<repo>/blob/main/index.html) | open the page |
| S1-R5 | finished card looks different | [style.css](https://github.com/<user>/<repo>/blob/main/style.css) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](https://github.com/<user>/<repo>/blob/main/style.css) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css](https://github.com/<user>/<repo>/blob/main/style.css) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit history](https://github.com/<user>/<repo>/commits/main) | commit history |