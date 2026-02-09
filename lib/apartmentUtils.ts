// Parse apartment data from API event
export function parseApartmentEvent(event: any) {
  const parsedJson = JSON.parse(event.json);
  return parsedJson.d.evtData;
}

// Extract image URL with fallbacks
export function getImageUrl(data: any): string {
  return (
    data.images?.[0]?.secure_url ||
    data.images?.[0]?.url ||
    data.imageUrl ||
    data.image ||
    "/placeholder-apartment.jpg"
  );
}

// Map event to apartment format
export function mapToApartment(event: any, hasJson: boolean = true) {
  let data;

  if (hasJson && event.json) {
    data = parseApartmentEvent(event);
  } else {
    data = event;
  }

  return {
    id: event.id || event._id,
    name: data.title || data.name,
    location: data.address || data.location,
    rating: data.rating || 0,
    oldPrice: data.price_per_night_ngn || data.oldPrice || data.original_price,
    newPrice: data.price_per_night_ngn || data.newPrice || data.price,
    imageUrl: getImageUrl(data),
  };
}

// Generic fetch function for apartment listings
export async function fetchApartmentListing(
  url: string,
  fetchFromAPI: (url: string) => Promise<any>,
) {
  try {
    const response = await fetchFromAPI(url);

    // Check multiple possible array locations
    const events = response?.shortlet_events || response?.top_deals || response;

    if (!Array.isArray(events)) {
      console.log("Data is not an array:", events);
      return [];
    }

    // Check if first item has json field to determine parsing method
    const hasJson = events.length > 0 && events[0].json;

    return events.map((event) => mapToApartment(event, hasJson));
  } catch (error) {
    console.error("Error fetching apartment listing:", error);
    return [];
  }
}
