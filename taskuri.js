=
const pacienti = [
  { id: 1, titlu: "Popescu Ion (Consult cardiologie)", gata: false, specialitate: "cardiologie" },
  { id: 2, titlu: "Ionescu Maria (Control pediatrie)", gata: true, specialitate: "pediatrie" },
  { id: 3, titlu: "Vasilescu Dan (Ecografie neurologie)", gata: false, specialitate: "neurologie" }
];

const SPECIALITATI = ["cardiologie", "neurologie", "pediatrie"];

function listeazaTitluri(lista) {
  return lista.map((p) => p.titlu);
}

function numaraInAsteptare(lista) {
  return lista.filter((p) => !p.gata).length;
}

function cautaDupaNume(lista, text) {
  const cautat = text.toLowerCase();
  return lista.filter((p) => p.titlu.toLowerCase().includes(cautat));
}

function nextId(lista) {
  return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

function adaugaPacient(lista, titlu, specialitate = "cardiologie") {
  const titluCurat = titlu ? titlu.trim() : "";

  if (!titluCurat) {
    console.log("Eroare validare: Numele pacientului nu poate fi gol!");
    return lista;
  }

  if (!SPECIALITATI.includes(specialitate.toLowerCase())) {
    console.log(`Eroare validare: Specialitatea invalidă: "${specialitate}"!`);
    return lista;
  }

  const nou = {
    id: nextId(lista),
    titlu: titluCurat,
    gata: false,
    specialitate: specialitate.toLowerCase()
  };

  return [...lista, nou];
}

function comutaStare(lista, id) {
  return lista.map((p) => (p.id === id ? { ...p, gata: !p.gata } : p));
}

function stergePacient(lista, id) {
  return lista.filter((p) => p.id !== id);
}


console.log("--- Citire ---");
console.log("Titluri pacienți:", listeazaTitluri(pacienti).join(", "));
console.log("În așteptare:", numaraInAsteptare(pacienti));
console.log("Căutare 'Popescu':", listeazaTitluri(cautaDupaNume(pacienti, "Popescu")).join(", "));

console.log("\n--- Adăugare ---");
let listaNoua = adaugaPacient(pacienti, " Georgescu Elena (Consult) ", "pediatrie");
console.log("Lista nouă conține:", listaNoua.length, "pacienți");
console.log("Array-ul original a rămas cu:", pacienti.length, "pacienți");

console.log("\n--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("După comutare stare ID 1, în așteptare:", numaraInAsteptare(listaNoua));

listaNoua = stergePacient(listaNoua, 3);
console.log("După ștergere ID 3, titluri rămase:", listeazaTitluri(listaNoua).join(", "));

console.log("\n--- Validare ---");
adaugaPacient(listaNoua, "");
adaugaPacient(listaNoua, "Test Pacient", "stomatologie");