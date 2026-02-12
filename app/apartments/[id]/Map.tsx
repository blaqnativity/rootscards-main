"use client";

import { useApartment } from "@/context/ApartmentContext";
import { MapPin } from "@phosphor-icons/react";

const Map = () => {
  const apartment = useApartment();

  return (
    <div className="space-y-4">
      <h2 className="hFour font-semibold text-[#0F172A]">Location</h2>

      {/* Map placeholder - you can integrate Google Maps later */}
      <div className="w-full h-[300px] bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
        {/* Simple placeholder */}
        <div className="text-center space-y-3">
          <MapPin size={48} className="mx-auto text-gray-400" />
          <div>
            <p className="font-semibold text-gray-700">{apartment.city}</p>
            <p className="text-sm text-gray-500">{apartment.location}</p>
          </div>
        </div>

        {/* You can replace this with actual Google Maps embed */}
        {/* <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(apartment.location)}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        /> */}
      </div>

      <div className="flex items-center gap-2 text-gray-600">
        <MapPin size={20} weight="fill" />
        <p className="text-sm">
          {apartment.location}, {apartment.city}
        </p>
      </div>
    </div>
  );
};

export default Map;
