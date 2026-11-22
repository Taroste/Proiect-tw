import { useEffect, useState } from "react";
import ProgramariList from "../components/ProgramariList.jsx";
import ProgramareForm from "../components/ProgramareForm.jsx";
import {
  createProgramare,
  deleteProgramare,
  fetchProgramari,
  updateProgramare,
} from "../api.js";
import styles from "./ProgramariPage.module.css";

export default function ProgramariPage() {
  const [programari, setProgramari] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchProgramari();
        if (!ignore) setProgramari(data);
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

  async function handleAdd(programareNoua) {
    const creat = await createProgramare(programareNoua);
    setProgramari((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const programare = programari.find((p) => p.id === id);
    try {
      const actualizat = await updateProgramare(id, { gata: !programare.gata });
      setProgramari((prev) => prev.map((p) => (p.id === id ? actualizat : p)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProgramare(id);
      setProgramari((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const active = programari.filter((p) => !p.gata).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă programare</h2>
        <ProgramareForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Programările mele</h2>
        <p className={styles.summary}>
          {programari.length} programări, dintre care {active} în așteptare
        </p>

        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă programările...
          </p>
        )}

        {error && (
          <p className="error" data-testid="error">
            {error}
          </p>
        )}

        {!loading && (
          <ProgramariList
            programari={programari}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}