"use client";

const BookingDetails = () => {
  return (
    <div className="bg-[#F1F4F9] p-3 rounded-2xl">
      {/* title */}
      <h3>Booking Details</h3>
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
              type="text"
              placeholder="Select Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
              //   value={checkIn}
              //   onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          {/* Check Out Input */}
          <div className="flex-1 w-full p-2 border rounded-2xl">
            <label
              htmlFor="check-in"
              className="block text-gray-800 font-semibold text-sm"
            >
              Check Out
            </label>
            <input
              id="check-in"
              type="text"
              placeholder="Select Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
              //   value={checkIn}
              //   onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
        </div>
        {/* number of guests */}
        <div className="flex-1 w-full p-2 border rounded-2xl">
          <label
            htmlFor="rooms"
            className="block text-gray-800 font-semibold text-sm"
          >
            Guests
          </label>
          <input
            id="guests"
            type="number"
            placeholder="1 Guest"
            min="0"
            className="w-full text-gray-500 placeholder-gray-400 text-sm focus:outline-none bg-transparent"
            //   value={rooms}
            //   onChange={(e) => setRooms(parseInt(e.target.value, 10) || 0)}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
