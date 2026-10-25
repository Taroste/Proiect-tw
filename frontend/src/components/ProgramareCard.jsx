const ETICHETE_SPECIALITATE = {
  cardiologie: "Cardiologie",
  neurologie: "Neurologie",
  pediatrie: "Pediatrie",
};

export default function ProgramareCard({ programare }) {
  const spec = programare.specialitate;

  return (
    <li className={programare.gata ? "item-card done" : "item-card"}>
      <div>
        <h3>{programare.titlu}</h3>
        <span className={`badge badge-${spec}`}>
          {ETICHETE_SPECIALITATE[spec] || spec}
        </span>
      </div>
      <span className="status">
        {programare.gata ? "Onorată" : "În așteptare"}
      </span>
    </li>
  );
}