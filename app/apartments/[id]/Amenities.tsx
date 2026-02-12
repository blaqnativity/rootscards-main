"use client";

import Image from "next/image";
import { useApartment } from "@/context/ApartmentContext";

// Map API amenities to icon names
const amenityIconMap: Record<string, string> = {
  "Wi-Fi": "wifi",
  AC: "ac",
  "Air Conditioning": "ac",
  "Swimming pool": "pool",
  "Solar power": "solar",
  Solar: "solar",
  "Washing machine": "wash",
  Microwave: "microwave",
  Kitchen: "kitchen",
  Workspace: "work",
  Garage: "garage",
  TV: "tv",
  Parking: "garage",
};

const Amenities = () => {
  const apartment = useApartment();

  // Get icon name or use default
  const getIconName = (amenity: string) => {
    return amenityIconMap[amenity] || "amenity";
  };

  return (
    <div className="p-6">
      <h3 className="mb-4 hFive font-semibold">Amenities</h3>
      <div className="grid grid-cols-4 gap-3">
        {apartment.amenities.map((amenity, id) => (
          <div
            key={id}
            className="bg-[#F1F4F9] rounded-2xl p-3 text-center text-xs space-y-2 flex flex-col items-center justify-center"
          >
            <Image
              src={`/amenities/${getIconName(amenity)}.png`}
              alt={amenity}
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
