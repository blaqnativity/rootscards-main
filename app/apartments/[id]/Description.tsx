"use client";

import { useApartment } from "@/context/ApartmentContext";

const Description = () => {
  const apartment = useApartment();

  return (
    <div className="space-y-4">
      <h2 className="hFour font-semibold text-[#0F172A]">Description</h2>
      <p className="text-[#666666] whitespace-pre-line">
        {apartment.description || "No description available."}
      </p>

      {/* Tags */}
      {apartment.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {apartment.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Description;
