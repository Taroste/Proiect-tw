export const SPECIALITATI = [
  { value: "cardiologie", label: "Cardiologie" },
  { value: "pediatrie", label: "Pediatrie" },
  { value: "neurologie", label: "Neurologie" },
];

export const ETICHETE_SPECIALITATE = Object.fromEntries(
  SPECIALITATI.map((s) => [s.value, s.label])
);

export const DETALII_SPECIALITATE = {
  cardiologie: {
    cabinet: "Cabinet 104 - Etaj 1",
    medic: "Dr. Radu Marinescu",
    protocol: "Include EKG de repaus și măsurarea tensiunii arteriale.",
  },
  pediatrie: {
    cabinet: "Cabinet 108 - Parter",
    medic: "Dr. Elena Stoica",
    protocol: "Necesită carnetul de vaccinări și trimitere de la medicul de familie.",
  },
  neurologie: {
    cabinet: "Cabinet 203 - Etaj 2",
    medic: "Dr. Mihai Dumitru",
    protocol: "Evaluare clinică neurologică și recomandare EEG/RMN dacă este cazul.",
  },
};