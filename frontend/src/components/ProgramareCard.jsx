const ETICHETE_SPECIALITATE = {
  cardiologie: "Cardiologie",
  neurologie: "Neurologie",
  pediatrie: "Pediatrie",
};

export default function ProgramareCard({ programare, onToggle, onDelete }) {
  const spec = programare.specialitate;

  return (
    <li className={programare.gata ? "item-card done" : "item-card"}>
      {/* Checkbox-ul și detaliile sunt grupate într-un label */}
      <label className="task-main">
        <input
          type="checkbox"
          checked={programare.gata}
          onChange={() => onToggle(programare.id)}
        />
        <div>
          <h3>{programare.titlu}</h3>
          <span className={`badge badge-${spec}`}>
            {ETICHETE_SPECIALITATE[spec] || spec}
          </span>
        </div>
      </label>

      {/* Butonul de ștergere care apelează funcția primită din App */}
      <button
        className="btn-danger"
        onClick={() => onDelete(programare.id)}
        aria-label={`Șterge ${programare.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}