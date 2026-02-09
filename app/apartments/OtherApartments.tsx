import OtherApartment from "./OtherApartment";
import { fetchFromAPI } from "@/utils/api";
import { fetchApartmentListing } from "@/lib/apartmentUtils";

async function fetchOtherApartments() {
  return fetchApartmentListing(
    "https://api.therootshive.com/v3/rootscard/appshortlets",
    fetchFromAPI,
  );
}

export default async function OtherApartments() {
  const otherApartments = await fetchOtherApartments();

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
