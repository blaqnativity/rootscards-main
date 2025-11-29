"use client";

import React, { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, checkIn, checkOut, rooms });
    alert(
      `Searching for:\nLocation: ${location}\nCheck In: ${checkIn}\nCheck Out: ${checkOut}\nRooms: ${rooms}`
    );
  };

  return (
    <div className="absolute bottom-20 w-full px-4">
      <form
        onSubmit={handleSearch}
        className="relative z-10 bg-white rounded-lg shadow p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 md:max-w-[1200px] mx-auto w-[95%]"
      >
        {/* Location Input */}
        <div className="flex-1 w-full md:w-auto p-2 md:p-0">
          <label
            htmlFor="location"
            className="block text-gray-800 font-semibold text-sm"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Where are you going?"
            className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Dividers (visible on medium screens and up) */}
        <div className="hidden md:block h-10 w-px bg-gray-300 mx-4"></div>

        {/* Check In Input */}
        <div className="flex-1 w-full md:w-auto p-2 md:p-0">
          <label
            htmlFor="check-in"
            className="block text-gray-800 font-semibold text-sm"
          >
            Check In
          </label>
          <input
            id="check-in"
            type="text"
            placeholder="Select Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="hidden md:block h-10 w-px bg-gray-300 mx-4"></div>

        {/* Check Out Input */}
        <div className="flex-1 w-full md:w-auto p-2 md:p-0">
          <label
            htmlFor="check-out"
            className="block text-gray-800 font-semibold text-sm"
          >
            Check Out
          </label>
          <input
            id="check-out"
            type="text"
            placeholder="Select Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div className="hidden md:block h-10 w-px bg-gray-300 mx-4"></div>

        {/* Rooms Input */}
        <div className="flex-1 w-full md:w-auto p-2 md:p-0">
          <label
            htmlFor="rooms"
            className="block text-gray-800 font-semibold text-sm"
          >
            Rooms
          </label>
          <input
            id="rooms"
            type="number"
            placeholder="0"
            min="0"
            className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
            value={rooms}
            onChange={(e) => setRooms(parseInt(e.target.value, 10) || 0)}
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg md:rounded-full
                   flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <MagnifyingGlass size={20} weight="bold" />
          Search
        </button>
      </form>
    </div>
  );
};
