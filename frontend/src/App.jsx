import { useState } from "react";
import ProgramariList from "./components/ProgramariList.jsx";

// Datele temei tale (valoarea inițială)
const PACIENTI_INITIALI = [
  { id: 1, titlu: "Popescu Ion (Consult cardiologie)", gata: false, specialitate: "cardiologie" },
  { id: 2, titlu: "Ionescu Maria (Control pediatrie)", gata: true, specialitate: "pediatrie" },
  { id: 3, titlu: "Vasilescu Dan (Ecografie neurologie)", gata: false, specialitate: "neurologie" }
];

// Tema de pornire: cea a sistemului de operare
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [pacienti, setPacienti] = useState(PACIENTI_INITIALI);
  const [tema, setTema] = useState(temaInitiala);

  // Funcția de comutare a stării (Gata / În așteptare)
  function handleToggle(id) {
    setPacienti((prev) =>
      prev.map((p) => (p.id === id ? { ...p, gata: !p.gata } : p))
    );
  }

  // Funcția de ștergere a unei programări
  function handleDelete(id) {
    setPacienti((prev) => prev.filter((p) => p.id !== id));
  }

  // Comutarea temei: state-ul pentru buton, atributul data-theme pentru CSS
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Valoare derivată: se recalculează la fiecare randare
  const active = pacienti.filter((p) => !p.gata).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>

        <h1>MedClinic</h1>
        <p>Gestionarea programărilor și a consultațiilor medicale.</p>
        <p className="app-count">
          {pacienti.length} programări, dintre care {active} în așteptare
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Programările mele</h2>
          <ProgramariList
            programari={pacienti}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}