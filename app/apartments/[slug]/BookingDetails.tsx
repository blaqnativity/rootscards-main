"use client";

import { useApartment } from "@/context/ApartmentContext";
import { useState } from "react";

const BookingDetails = () => {
  const apartment = useApartment();
  const [guests, setGuests] = useState(1);

  return (
    <div className="p-6">
      <div className="bg-[#F1F4F9] p-3 rounded-2xl">
        {/* Title */}
        <h3 className="mb-3 hFive font-medium">Booking Details</h3>
        <div className="bg-white p-4 rounded-2xl space-y-4">
          <div className="flex items-center justify-between gap-2">
            {/* Check In Input */}
            <div className="flex-1 w-full p-2 border rounded-2xl">
              <label
                htmlFor="check-in"
                className="block text-gray-800 font-semibold text-sm"
              >
                Check In
              </label>
              <input
                id="check-in"
                type="date"
                className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
              />
            </div>
            {/* Check Out Input */}
            <div className="flex-1 w-full p-2 border rounded-2xl">
              <label
                htmlFor="check-out"
                className="block text-gray-800 font-semibold text-sm"
              >
                Check Out
              </label>
              <input
                id="check-out"
                type="date"
                className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
              />
            </div>
          </div>
          {/* Number of Guests */}
          <div className="flex-1 w-full p-2 border rounded-2xl">
            <label
              htmlFor="guests"
              className="block text-gray-800 font-semibold text-sm"
            >
              Guests
            </label>
            <input
              id="guests"
              type="number"
              placeholder={`1 Guest (Max ${apartment.guests_max})`}
              min="1"
              max={apartment.guests_max}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
