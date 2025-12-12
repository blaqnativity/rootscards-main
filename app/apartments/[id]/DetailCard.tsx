"use client";

import Image from "next/image";
import { useApartment } from "@/context/ApartmentContext";

const DetailCard = () => {
  const apartment = useApartment();

  if (!apartment) return null;

  return (
    <div className="p-6 space-y-5">
      {/* title */}
      <h2 className="hFour">{apartment.name}</h2>

      {/* location */}
      <div className="flex items-center gap-2">
        <Image src="/location.png" alt="Location Icon" width={16} height={16} />
        <p className="text-[#666666] font-medium">{apartment.location}</p>
      </div>

      {/* price */}
      <p className="hThree">{apartment.newPrice}</p>

      {/* booking button */}
      <button className="text-center bg-black text-white p-3 font-semibold rounded-full w-full">
        Book
      </button>
    </div>
  );
};

export default DetailCard;
