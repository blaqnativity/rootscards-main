import OtherApartment from "./OtherApartment";
import { fetchFromAPI } from "@/utils/api";

async function fetchApartmentListings() {
  try {
    const data = await fetchFromAPI(
      "https://api.therootshive.com/v3/rootscard/appshortlets",
    );

    if (!Array.isArray(data)) {
      console.log("Apartments data is not an array:", data);
      return [];
    }

    return data.map((apt: any) => ({
      id: apt.id || apt._id,
      name: apt.name || apt.title,
      location: apt.location || apt.address,
      rating: apt.rating || 0,
      oldPrice: apt.oldPrice || apt.original_price,
      newPrice: apt.newPrice || apt.price,
      discount: apt.discount || "0% off",
      imageUrl: apt.imageUrl || apt.image || apt.thumbnail,
    }));
  } catch (error) {
    console.error("Error fetching apartments:", error);
    return [];
  }
}

export default async function OtherApartments() {
  const otherApartments = await fetchApartmentListings();

  return (
    <section className="py-12">
      <div className="screen-container">
        <h2 className="text-2xl font-bold mb-6">Others</h2>
        {otherApartments.length === 0 ? (
          <p className="text-gray-500">
            No apartments available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {otherApartments.map((apt) => (
              <OtherApartment key={apt.id} apartment={apt} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
