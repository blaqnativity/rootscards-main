"use client";
import Image from "next/image";
import { Heart, Star } from "@phosphor-icons/react";

interface Deal {
  name: string;
  location: string;
  rating: number;
  oldPrice: string;
  newPrice: string;
  imageUrl: string;
}

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
  return (
    <div className="shrink-0 w-80 bg-white rounded-xl transition duration-300">
      {/* Image Area */}
      <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
        <Image
          src={deal.imageUrl}
          alt={deal.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />

        {/* Heart Icon & Rating Overlay */}
        <div className="absolute top-3 right-3 flex items-center space-x-2">
          {/* Rating */}
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center text-xs font-semibold text-gray-800">
            <Star size={12} weight="fill" className="text-yellow-500 mr-1" />
            {deal.rating.toFixed(1)}
          </div>
          {/* Heart Icon */}
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-700 transition">
            <Heart size={20} weight="bold" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {deal.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{deal.location}</p>

        {/* Price and CTA Row */}
        <div className="flex justify-between items-center">
          {/* Price Details */}
          <div>
            <p className="text-xs text-gray-400 line-through">
              {deal.oldPrice}
            </p>
            <p className="text-lg font-bold text-gray-900">{deal.newPrice}</p>
          </div>

          {/* CTA Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200">
            Get offer
          </button>
        </div>
      </div>
    </div>
  );
}
