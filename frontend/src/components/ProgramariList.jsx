import ProgramareCard from "./ProgramareCard.jsx";

export default function ProgramariList({ programari, onToggle, onDelete }) {
  if (!programari || programari.length === 0) {
    return <p className="empty">Nu există nicio programare.</p>;
  }

  return (
    <ul className="item-list">
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