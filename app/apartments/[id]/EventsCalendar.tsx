"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventsCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="p-6">
      <h3 className="mb-4 hFive font-semibold">Availability</h3>
      <div className="custom-calendar">
        <Calendar
          onChange={onChange}
          value={value}
          minDate={new Date()} // Prevent booking past dates
          className="border-0 rounded-2xl shadow-sm"
        />
      </div>
    </div>
  );
};

export default EventsCalendar;
