const API_BASE = "http://localhost:3000"; // Or use an env variable

export const api = async (endpoint: string, method = "GET", data?: any) => {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
};
