"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Star } from "@phosphor-icons/react";

interface Apartment {
  id: string;
  name: string;
  location: string;
  rating: number;
  oldPrice: string;
  newPrice: string;
  discount: string;
  imageUrl: string | StaticImageData;
}

interface OtherApartmentCardProps {
  apartment: Apartment;
}

export default function OtherApartment({ apartment }: OtherApartmentCardProps) {
  const detailPageHref = `/apartments/${apartment.id}`;
  return (
    <Link
      href={detailPageHref}
      className="relative w-full h-[400px] bg-gray-900 rounded-2xl overflow-hidden cursor-pointer transition duration-300"
    >
      {/* Image Area */}
      <Image
        src={apartment.imageUrl}
        alt={apartment.name}
        fill
        className="object-cover opacity-70"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Discount Badge */}
      <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
        {apartment.discount}
      </div>

      {/* Content Overlay at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        {/* Main Details */}
        <h3 className="text-lg font-semibold truncate mb-1 leading-tight">
          {apartment.name}
        </h3>
        <p className="text-xs font-light flex items-center mb-3">
          {apartment.location} •
          <Star size={12} weight="fill" className="text-yellow-400 ml-1 mr-1" />
          {apartment.rating.toFixed(1)}
        </p>

        {/* Price Details */}
        <div className="mt-2">
          <p className="text-xs text-gray-400 line-through">
            {apartment.oldPrice}
          </p>
          <p className="text-lg font-bold">{apartment.newPrice}</p>
        </div>
      </div>
    </Link>
  );
}
