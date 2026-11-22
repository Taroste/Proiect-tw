import { useState, useEffect } from "react";
import ProgramariList from "./components/ProgramariList.jsx";
import { fetchProgramari } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [pacienti, setPacienti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [tema, setTema] = useState(temaInitiala);
  const [pauza, setPauza] = useState(false);
  const [urgenta, setUrgenta] = useState(false);

  // Efect pentru modul de urgență "Cod Roșu"
  useEffect(() => {
    if (urgenta) {
      document.body.classList.add("cod-rosu");
    } else {
      document.body.classList.remove("cod-rosu");
    }
  }, [urgenta]);

  // Efect pentru încărcarea datelor de la API la montarea componentei
  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchProgramari();
        if (!ignore) setPacienti(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  // În Etapa 6 bifarea și ștergerea rămân locale (se rezolvă pe server în Etapa 7)
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

  return (
    <>
      <header className="app-header">
        {/* Butonul de pauză (Stânga) */}
        <button className="pauza-toggle" onClick={() => setPauza(!pauza)}>
          {pauza ? "🚀 Înapoi la muncă!" : "🍔 Pauză de masă"}
        </button>

        {/* Butonul de Urgență (Dreapta) */}
        <button
          className={`urgenta-toggle ${urgenta ? "active" : ""}`}
          onClick={() => setUrgenta(!urgenta)}
        >
          {urgenta ? "🛑 Oprește Urgența" : "🚨 Cod Roșu"}
        </button>

        {/* Butonul de temă (Dreapta) */}
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

            {loading && <p className="info">Se încarcă programările...</p>}

            {error && (
              <p className="error">
                Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
              </p>
            )}

            {!loading && !error && (
              <ProgramariList
                programari={pacienti}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            )}
          </section>
        )}
      </main>
    </>
  );
}