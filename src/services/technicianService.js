// Browser-only storage. Replace this with an API request when the backend is ready.
export async function saveTechnician(data) {
  const key = 'fixlink:technicians:v1';
  const rows = JSON.parse(localStorage.getItem(key) || '[]');

  rows.push({
    ...data,
    id: crypto.randomUUID?.() || String(Date.now()),
    createdAt: new Date().toISOString(),
  });

  localStorage.setItem(key, JSON.stringify(rows));
  return rows.at(-1);
}
