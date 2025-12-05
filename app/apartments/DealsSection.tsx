// import { section } from "framer-motion/client";
import DealCard from "./DealCard";

const weekendDeals = [
  {
    name: "Seaside Serenity Villa",
    location: "Lugbe, Abuja",
    rating: 4.0,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    imageUrl: "/deal-villa-1.jpg",
  },
  {
    name: "Seaside Serenity Villa",
    location: "Lugbe, Abuja",
    rating: 4.0,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    imageUrl: "/deal-villa-2.jpg",
  },
  {
    name: "Seaside Serenity Villa",
    location: "Lugbe, Abuja",
    rating: 4.0,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    imageUrl: "/deal-villa-3.jpg",
  },
  {
    name: "Seaside Serenity Villa",
    location: "Lugbe, Abuja",
    rating: 4.0,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    imageUrl: "/deal-villa-4.jpg",
  },
];

export default function DealsSection() {
  return (
    <section className="py-15 bg-[#f6f6f6]">
      <div className="screen-container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="hFour font-semibold tracking-tight text-gray-900">
            Deals for the Weekend
          </h1>

          {/* Navigation Arrows (Static placeholder for now) */}
          <div className="flex space-x-3">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
              {"<"}
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
              {">"}
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {weekendDeals.map((deal, index) => (
            <DealCard key={index} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}
