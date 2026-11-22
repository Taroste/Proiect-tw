export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

export function fetchProgramari() {
  return request("/programari");
}

export function fetchProgramare(id) {
  return request(`/programari/${id}`);
}

export function createProgramare(programare) {
  return request("/programari", {
    method: "POST",
    body: JSON.stringify(programare),
  });
}

export function updateProgramare(id, changes) {
  return request(`/programari/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteProgramare(id) {
  return request(`/programari/${id}`, {
    method: "DELETE",
  });
}