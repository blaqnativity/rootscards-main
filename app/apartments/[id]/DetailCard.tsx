"use client";

import Image from "next/image";
import { useApartment } from "@/context/ApartmentContext";
import { MapPin, Bed, Bathtub, Users } from "@phosphor-icons/react";

const DetailCard = () => {
  const apartment = useApartment();

  // Format price in Naira
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 space-y-5 sticky top-6">
      {/* Title */}
      <h2 className="hFour">{apartment.name}</h2>

      {/* Location */}
      <div className="flex items-center gap-2">
        <MapPin size={20} weight="fill" className="text-gray-600" />
        <p className="text-[#666666] font-medium">{apartment.location}</p>
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-3 gap-4 py-4 border-y">
        <div className="text-center">
          <Bed size={24} className="mx-auto mb-1 text-gray-700" />
          <p className="text-sm text-gray-600">{apartment.bedrooms}</p>
          <p className="text-xs text-gray-500">Bedrooms</p>
        </div>
        <div className="text-center">
          <Bathtub size={24} className="mx-auto mb-1 text-gray-700" />
          <p className="text-sm text-gray-600">{apartment.bathrooms}</p>
          <p className="text-xs text-gray-500">Bathrooms</p>
        </div>
        <div className="text-center">
          <Users size={24} className="mx-auto mb-1 text-gray-700" />
          <p className="text-sm text-gray-600">{apartment.guests_max}</p>
          <p className="text-xs text-gray-500">Guests</p>
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="hThree">{formatPrice(apartment.price_per_night)}</p>
        <p className="text-sm text-gray-500">/night</p>
      </div>

      {/* Caution Fee */}
      {apartment.caution_fee > 0 && (
        <p className="text-sm text-gray-600">
          Caution fee: {formatPrice(apartment.caution_fee)}
        </p>
      )}

      {/* Booking Button */}
      <button className="text-center bg-black text-white p-3 font-semibold rounded-full w-full hover:bg-gray-800 transition">
        Book
      </button>
    </div>
  );
};

export default DetailCard;
