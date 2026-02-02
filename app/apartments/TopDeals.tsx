import TopDeal from "./TopDeal";
import { fetchFromAPI } from "@/utils/api";

async function fetchTopDeals() {
  try {
    const deals = await fetchFromAPI(
      "https://api.therootshive.com/v3/rootscard/topdeals",
    );

    if (!Array.isArray(deals)) {
      console.log("Deals data is not an array:", deals);
      return [];
    }

    return deals.map((deal: any) => ({
      name: deal.name || deal.title,
      location: deal.location || deal.address,
      rating: deal.rating || 0,
      oldPrice: deal.oldPrice || deal.original_price,
      newPrice: deal.newPrice || deal.price,
      imageUrl: deal.imageUrl || deal.image || deal.thumbnail,
    }));
  } catch (error) {
    console.error("Error fetching top deals:", error);
    return [];
  }
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
            {weekendDeals.map((deal, index) => (
              <TopDeal key={index} deal={deal} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
