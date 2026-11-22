import { useState } from "react";
import { SPECIALITATI } from "../constants.js";
import styles from "./ProgramareForm.module.css";

const TITLU_MAX = 100;

export default function ProgramareForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [specialitate, setSpecialitate] = useState("cardiologie");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Numele pacientului și consultația sunt obligatorii.";
    if (t.length > TITLU_MAX) return `Textul are maximum ${TITLU_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);
    try {
      await onAdd({ titlu: titlu.trim(), specialitate, gata: false });
      setTitlu("");
      setSpecialitate("cardiologie");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Pacient și consultație
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Popescu Ion (Consult cardiologie)"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Specialitate
        <select
          value={specialitate}
          onChange={(e) => setSpecialitate(e.target.value)}
          data-testid="form-specialitate"
        >
          {SPECIALITATI.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă programare"}
      </button>
    </form>
  );
}