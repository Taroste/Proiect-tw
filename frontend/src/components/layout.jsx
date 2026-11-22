import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);
  const [pauza, setPauza] = useState(false);
  const [urgenta, setUrgenta] = useState(false);

  useEffect(() => {
    if (urgenta) {
      document.body.classList.add("cod-rosu");
    } else {
      document.body.classList.remove("cod-rosu");
    }
  }, [urgenta]);

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  function navClass({ isActive }) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  }

  return (
    <>
      <header className={`${styles.header} ${urgenta ? styles.headerUrgenta : ""}`}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span
              className={`${styles.led} ${
                pauza ? styles.ledOrange : urgenta ? styles.ledRed : styles.ledGreen
              }`}
            />
            <span className={styles.logo}>MedClinic</span>
          </div>

          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Programări
            </NavLink>
            <NavLink to="/despre" className={navClass}>
              Despre
            </NavLink>
          </nav>

          <div className={styles.controls}>
            <button className={styles.ctrlBtn} onClick={() => setPauza(!pauza)}>
              {pauza ? "🚀 Înapoi" : "🍔 Pauză"}
            </button>
            <button className={styles.ctrlBtn} onClick={() => setUrgenta(!urgenta)}>
              {urgenta ? "🛑 Stop" : "🚨 Cod Roșu"}
            </button>
            <button className={styles.ctrlBtn} onClick={handleTema} aria-pressed={tema === "dark"}>
              {tema === "dark" ? "☀️ Luminos" : "🌙 Întunecat"}
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {pauza ? (
          <section className={`panel ${styles.pauzaBox}`}>
            <h2>Sistem indisponibil 🛑</h2>
            <img
              src="https://media.giphy.com/media/VvQvOFqPjZLi/giphy.gif"
              alt="Pauză de masă"
              className={styles.pauzaGif}
            />
            <p>Doamna de la recepție este în pauza de masă. Reveniți în 45 de minute.</p>
          </section>
        ) : (
          <Outlet />
        )}
      </main>

      <footer className={styles.footer}>Proiect Tehnologii Web · MedClinic</footer>
    </>
  );
}