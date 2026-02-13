"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Star } from "@phosphor-icons/react";

interface Apartment {
  id: number;
  slug: string;
  name: string;
  location: string;
  rating: number;
  oldPrice: number;
  newPrice: number;
  imageUrl: string | StaticImageData;
}

interface OtherApartmentCardProps {
  apartment: Apartment;
}

export default function OtherApartment({ apartment }: OtherApartmentCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const discountPercent = apartment.oldPrice
    ? Math.round(
        ((apartment.oldPrice - apartment.newPrice) / apartment.oldPrice) * 100,
      )
    : 0;

  return (
    <Link
      href={`/apartments/${apartment.slug}`}
      className="relative w-full h-[400px] bg-gray-900 rounded-2xl overflow-hidden cursor-pointer transition duration-300 hover:scale-[1.02]"
    >
      <Image
        src={apartment.imageUrl}
        alt={apartment.name}
        fill
        className="object-cover opacity-70"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Discount badge */}
      {discountPercent > 0 && (
        <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          Up to {discountPercent}% off
        </div>
      )}

      {/* Bottom content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-semibold truncate mb-1 leading-tight">
          {apartment.name}
        </h3>
        <p className="text-xs font-light flex items-center mb-3">
          {apartment.location} •
          <Star size={12} weight="fill" className="text-yellow-400 ml-1 mr-1" />
          {apartment.rating.toFixed(1)}
        </p>

        {/* Price section */}
        <div className="mt-2">
          {apartment.oldPrice > apartment.newPrice && (
            <p className="text-xs text-gray-400 line-through">
              {formatPrice(apartment.oldPrice)}
            </p>
          )}
          <p className="text-lg font-bold">{formatPrice(apartment.newPrice)}</p>
        </div>
      </div>
    </Link>
  );
}
