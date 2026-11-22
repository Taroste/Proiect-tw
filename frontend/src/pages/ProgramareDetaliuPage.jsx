import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProgramare } from "../api.js";
import { DETALII_SPECIALITATE, ETICHETE_SPECIALITATE } from "../constants.js";
import styles from "./ProgramareDetaliuPage.module.css";

export default function ProgramareDetaliuPage() {
  const { id } = useParams();
  const [programare, setProgramare] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchProgramare(id)
      .then((data) => {
        if (!ignore) {
          setProgramare(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă detaliile programării...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Programarea nu a putut fi încărcată: {error}
        </p>
        <Link to="/">Înapoi la programări</Link>
      </section>
    );
  }

  const extra = DETALII_SPECIALITATE[programare.specialitate] ?? {
    cabinet: "Cabinet Recepție",
    medic: "Medic de gardă",
    protocol: "Consultație standard.",
  };

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Înapoi la programări
      </Link>

      <h2 className={programare.gata ? styles.done : undefined} data-testid="detail-title">
        {programare.titlu}
      </h2>

      <dl className={styles.fields}>
        <dt>Specialitate</dt>
        <dd>
          <span className={`badge badge-${programare.specialitate}`}>
            {ETICHETE_SPECIALITATE[programare.specialitate] || programare.specialitate}
          </span>
        </dd>

        <dt>Status</dt>
        <dd>{programare.gata ? "Finalizată" : "În așteptare"}</dd>

        <dt>Cabinet</dt>
        <dd>{extra.cabinet}</dd>

        <dt>Medic</dt>
        <dd>{extra.medic}</dd>

        <dt>Protocol</dt>
        <dd>{extra.protocol}</dd>

        <dt>ID</dt>
        <dd>{programare.id}</dd>
      </dl>
    </section>
  );
}