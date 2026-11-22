import ProgramareCard from "./ProgramareCard.jsx";
import styles from "./ProgramariList.module.css";

export default function ProgramariList({ programari, onToggle, onDelete }) {
  if (!programari || programari.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există nicio programare.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {programari.map((programare) => (
        <ProgramareCard
          key={programare.id}
          programare={programare}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}