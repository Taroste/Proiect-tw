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
| S1-R1 | README: description, fields, sample data, how to run | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/README.md?plain=1#L1-L20 | read |
| S1-R2 | AI usage section | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/README.md?plain=1#L22-L28 | read |
| S1-R3 | AI log for stage 1 | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/AI-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/index.html#L1-L60 | open the page |
| S1-R5 | finished card looks different | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/style.css#L130-L138 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/style.css#L150-L156 | resize < 700px |
| S1-R7 | visible focus, readable dark theme | https://github.com/Taroste/Proiect-tw/blob/2771a6e889c1205d8962e7bf0e142aa960b5aee7/style.css#L143-L167 | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | https://github.com/Taroste/Proiect-tw/commit/2771a6e889c1205d8962e7bf0e142aa960b5aee7 | commit history |
