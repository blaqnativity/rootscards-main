"use client";

import { useState } from "react";
import TrendingApartment from "./TrendingApartment";

// Data Structure
const trendingData = {
  Abuja: [
    {
      name: "Toviz Villa",
      location: "Garki, Abuja",
      rating: 4.6,
      oldPrice: "₦33,000",
      newPrice: "₦25,000/night",
      imageUrl: "/trending-toviz.jpg",
    },
    {
      name: "Uliver Apartment",
      location: "Galadimawa, Abuja",
      rating: 4.6,
      oldPrice: "₦33,000",
      newPrice: "₦25,000/night",
      imageUrl: "/trending-uliver.jpg",
    },
    {
      name: "Lavani Homes",
      location: "Lugbe, Abuja",
      rating: 4.6,
      oldPrice: "₦33,000",
      newPrice: "₦25,000/night",
      imageUrl: "/trending-lavani.jpg",
    },
    {
      name: "Barn Ny Torn",
      location: "Wuse, Abuja",
      rating: 4.6,
      oldPrice: "₦33,000",
      newPrice: "₦25,000/night",
      imageUrl: "/trending-barn.jpg",
    },
  ],
  Lagos: [
    {
      name: "Lagos Loft",
      location: "Lekki, Lagos",
      rating: 4.8,
      oldPrice: "₦40,000",
      newPrice: "₦30,000/night",
      imageUrl: "/trending-lagos-1.jpg",
    },
    {
      name: "Island Retreat",
      location: "Ikoyi, Lagos",
      rating: 4.9,
      oldPrice: "₦50,000",
      newPrice: "₦40,000/night",
      imageUrl: "/trending-lagos-2.jpg",
    },
  ],
  "Port-Harcourt": [
    {
      name: "Rivers Edge",
      location: "Rumuola, PH",
      rating: 4.4,
      oldPrice: "₦25,000",
      newPrice: "₦20,000/night",
      imageUrl: "/trending-ph-1.jpg",
    },
  ],
  Kwara: [],
  Kaduna: [],
};

const cities = Object.keys(trendingData);

export default function TrendingApartments() {
  const [activeCity, setActiveCity] = useState(cities[0]);
  const currentApartments = trendingData[activeCity] || [];

  return (
    <section className="bg-white py-15">
      <div className="screen-container">
        {/* Section Title */}
        <h1 className="hFour font-semibold tracking-tight text-gray-900 mb-8">
          Trending Apartments
        </h1>

        {/* City Navigation Tabs */}
        <div className="flex space-x-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`
              shrink-0 py-2 px-5 rounded-full text-sm font-medium transition
              ${
                activeCity === city
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Apartment Cards List */}
        {currentApartments.length > 0 ? (
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {currentApartments.map((apt, index) => (
              <TrendingApartment key={index} apartment={apt} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-10">
            No trending apartments found for {activeCity} yet.
          </p>
        )}
      </div>
    </section>
  );
}
