import Image from "next/image";
import { Star } from "@phosphor-icons/react";

interface Apartment {
  name: string;
  location: string;
  rating: number;
  oldPrice: string;
  newPrice: string;
  imageUrl: string;
}

interface TrendingApartmentCardProps {
  apartment: Apartment;
}

export default function TrendingApartment({
  apartment,
}: TrendingApartmentCardProps) {
  return (
    <div className="shrink-0 w-80 h-[400px] bg-white rounded-2xl overflow-hidden cursor-pointer transition duration-300">
      {/* Image Area with Overlay */}
      <div className="relative w-full h-full">
        <Image
          src={apartment.imageUrl}
          alt={apartment.name}
          fill
          className="object-cover"
          sizes="300px"
        />

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent/10 p-5 flex flex-col justify-end text-white">
          {/* Main Details */}
          <h3 className="text-2xl font-semibold mb-1 leading-tight">
            {apartment.name}
          </h3>
          <p className="text-sm font-light flex items-center mb-3">
            {apartment.location} •
            <Star
              size={14}
              weight="fill"
              className="text-yellow-400 ml-1 mr-1"
            />
            {apartment.rating.toFixed(1)}
          </p>

          {/* Price Details */}
          <div>
            <p className="text-sm text-gray-400 line-through">
              {apartment.oldPrice}
            </p>
            <p className="text-xl font-bold">{apartment.newPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
