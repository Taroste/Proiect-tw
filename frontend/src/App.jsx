import ProgramariList from "./components/ProgramariList.jsx";

const pacienti = [
  { id: 1, titlu: "Popescu Ion (Consult cardiologie)", gata: false, specialitate: "cardiologie" },
  { id: 2, titlu: "Ionescu Maria (Control pediatrie)", gata: true, specialitate: "pediatrie" },
  { id: 3, titlu: "Vasilescu Dan (Ecografie neurologie)", gata: false, specialitate: "neurologie" }
];

export default function App() {
  const active = pacienti.filter((t) => !t.gata).length;

  return (
    <>
      <header className="app-header">
        <h1>MedClinic</h1>
        <p>Gestionarea programărilor și a consultațiilor medicale.</p>
        <p className="app-count">
          {pacienti.length} programări, dintre care {active} în așteptare
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Programările mele</h2>
          <ProgramariList programari={pacienti} />
        </section>
      </main>
    </>
  );
}