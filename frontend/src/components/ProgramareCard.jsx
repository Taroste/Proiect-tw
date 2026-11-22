import { Link } from "react-router-dom";
import { ETICHETE_SPECIALITATE } from "../constants.js";
import styles from "./ProgramareCard.module.css";

export default function ProgramareCard({ programare, onToggle, onDelete }) {
  const spec = programare.specialitate;

  return (
    <li
      className={programare.gata ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={programare.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={programare.gata}
          onChange={() => onToggle(programare.id)}
          aria-label={`Marchează ${programare.titlu}`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/programari/${programare.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {programare.titlu}
          </Link>
          <span className={`badge badge-${spec}`}>
            {ETICHETE_SPECIALITATE[spec] || spec}
          </span>
        </div>
      </div>

      <button
        className="btn-danger"
        onClick={() => onDelete(programare.id)}
        aria-label={`Șterge ${programare.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}