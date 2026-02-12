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

// Create URL-friendly slug from title and id
export function createSlug(title: string, id: number | string): string {
  const slugTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slugTitle}-${id}`;
}

// Extract ID from slug (e.g., "luxury-one-bed-115219" -> "115219")
export function getIdFromSlug(slug: string): string {
  const parts = slug.split("-");
  return parts[parts.length - 1];
}

// Map event to apartment format
export function mapToApartment(event: any, hasJson: boolean = true) {
  let data;

  if (hasJson && event.json) {
    data = parseApartmentEvent(event);
  } else {
    data = event;
  }

  const title = data.title || data.name;
  const id = event.id || event._id;

  return {
    id,
    slug: createSlug(title, id),
    name: title,
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

// Fetch single apartment by ID for details page
export async function fetchApartmentById(
  id: string,
  fetchFromAPI: (url: string) => Promise<any>,
) {
  try {
    const response = await fetchFromAPI(
      "https://api.therootshive.com/v3/rootscard/appshortlets",
    );

    const events = response?.shortlet_events || [];

    if (!Array.isArray(events)) {
      console.log("Data is not an array:", events);
      return null;
    }

    // Find the apartment by id
    const event = events.find((e: any) => e.id.toString() === id);

    if (!event) {
      return null;
    }

    // Parse and return full apartment details
    const parsedJson = JSON.parse(event.json);
    const aptData = parsedJson.d.evtData;

    return {
      id: event.id,
      name: aptData.title,
      location: aptData.address,
      city: aptData.city,
      rating: 0,
      price_per_night: aptData.price_per_night_ngn,
      caution_fee: aptData.caution_fee_ngn,
      discount_percent: aptData.discount_percent,
      guests_max: aptData.guests_max,
      bedrooms: aptData.bedrooms,
      beds: aptData.beds,
      bathrooms: aptData.bathrooms,
      amenities: aptData.amenities || [],
      tags: aptData.tags || [],
      description: aptData.description || "",
      images:
        aptData.images?.map((img: any) => ({
          url: img.secure_url || img.url,
          width: img.width,
          height: img.height,
        })) || [],
      created_at: aptData.created_at,
    };
  } catch (error) {
    console.error("Error fetching apartment by ID:", error);
    return null;
  }
}

// Fetch single apartment by slug
export async function fetchApartmentBySlug(
  slug: string,
  fetchFromAPI: (url: string) => Promise<any>,
) {
  const id = getIdFromSlug(slug);
  return fetchApartmentById(id, fetchFromAPI);
}
