export async function fetchFromAPI(endpoint: string) {
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${endpoint}: ${response.status}`);
  }

  const result = await response.json();
  console.log(`Fetched data from ${endpoint}:`, result);
  return result.data;
}
