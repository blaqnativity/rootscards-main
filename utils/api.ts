export async function createAuthHeaders() {
  const username = process.env.API_USERNAME;
  const password = process.env.API_PASSWORD;

  const credentials = Buffer.from(`${username}:${password}`).toString("base64");

  return {
    "Content-Type": "application/json",
    Authorization: `Basic ${credentials}`,
  };
}

export async function fetchFromAPI(endpoint: string) {
  const headers = await createAuthHeaders();

  const response = await fetch(endpoint, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${endpoint}: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}
