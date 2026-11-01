import { useState,useEffect } from "react";
import ProgramariList from "./components/ProgramariList.jsx";

const PACIENTI_INITIALI = [
  { id: 1, titlu: "Popescu Ion (Consult cardiologie)", gata: false, specialitate: "cardiologie" },
  { id: 2, titlu: "Ionescu Maria (Control pediatrie)", gata: true, specialitate: "pediatrie" },
  { id: 3, titlu: "Vasilescu Dan (Ecografie neurologie)", gata: false, specialitate: "neurologie" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [pacienti, setPacienti] = useState(PACIENTI_INITIALI);
  const [tema, setTema] = useState(temaInitiala);
  const [pauza, setPauza] = useState(false);
  
  // 1. NOU: STATE PENTRU MODUL URGENȚĂ
  const [urgenta, setUrgenta] = useState(false);

  function handleToggle(id) {
    setPacienti((prev) => prev.map((p) => (p.id === id ? { ...p, gata: !p.gata } : p)));
  }

  function handleDelete(id) {
    setPacienti((prev) => prev.filter((p) => p.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = pacienti.filter((p) => !p.gata).length;

  useEffect(() => {
  if (urgenta) {
    document.body.classList.add("cod-rosu");
  } else {
    document.body.classList.remove("cod-rosu");
  }
}, [urgenta]);

 return (
    <>
      <header className="app-header">
        {/* Butonul de pauză (Stânga) */}
        <button className="pauza-toggle" onClick={() => setPauza(!pauza)}>
          {pauza ? "🚀 Înapoi la muncă!" : "🍔 Pauză de masă"}
        </button>

        {/* Butonul de Urgență */}
        <button 
          className={`urgenta-toggle ${urgenta ? "active" : ""}`} 
          onClick={() => setUrgenta(!urgenta)}
        >
          {urgenta ? "🛑 Oprește Urgența" : "🚨 Cod Roșu"}
        </button>

        {/* Butonul de temă */}
        <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>

        <h1>MedClinic</h1>
        
        <div className="clinic-status">
          <span className={`led ${pauza ? "led-orange" : urgenta ? "led-red" : "led-green"}`}></span>
          <span className="status-text">
            {pauza ? "RECEPȚIE ÎNCHISĂ (PAUZĂ)" : urgenta ? "ALERTĂ MAXIMĂ" : "SISTEM PARȚIAL FUNCTIONAL"}
          </span>
        </div>

        <p>Gestionarea programărilor și a consultațiilor medicale.</p>
        
        <p className="app-count">
          {pauza 
            ? "Momentan nu numărăm nimic, mâncăm!" 
            : `${pacienti.length} programări, dintre care ${active} în așteptare`}
        </p>
      </header>

      {/* AICI: Am lăsat doar className="container" */}
      <main className="container">
        {pauza ? (
          <section className="panel pauza-state">
            <h2>Sistem indisponibil 🛑</h2>
            <img src="https://media.giphy.com/media/VvQvOFqPjZLi/giphy.gif" alt="Pauza de masa" className="pauza-gif" />
            <p className="pauza-text">Doamna de la recepție mănâncă pufuleți.</p>
            <p className="pauza-text">Reveniți în 45 de minute (sau mâine).</p>
          </section>
        ) : (
          <section className="panel">
            <h2>Programările mele</h2>
            <ProgramariList
              programari={pacienti}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          </section>
        )}
      </main>
    </>
  );
}