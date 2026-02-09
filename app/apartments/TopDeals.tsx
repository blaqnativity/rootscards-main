import TopDeal from "./TopDeal";
import { fetchFromAPI } from "@/utils/api";
import { fetchApartmentListing } from "@/lib/apartmentUtils";

async function fetchTopDeals() {
  return fetchApartmentListing(
    "https://api.therootshive.com/v3/rootscard/topdeals",
    fetchFromAPI,
  );
}

export default async function TopDeals() {
  const weekendDeals = await fetchTopDeals();

  return (
    <section className="py-15 bg-[#f6f6f6]">
      <div className="screen-container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="hFour font-semibold tracking-tight text-gray-900">
            Deals for the Weekend
          </h1>

          <div className="flex space-x-3">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
              {"<"}
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
              {">"}
            </button>
          </div>
        </div>

        {weekendDeals.length === 0 ? (
          <p className="text-gray-500">No deals available at the moment.</p>
        ) : (
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {weekendDeals.map((deal) => (
              <TopDeal key={deal.id} deal={deal} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
