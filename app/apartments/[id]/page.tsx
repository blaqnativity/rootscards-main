"use client";

import { ApartmentContext } from "@/context/ApartmentContext";
import { otherApartments } from "../apartments";
import { useParams } from "next/navigation";

import EventsCalendar from "./EventsCalendar";
import Gallery from "./Gallery";
import Description from "./Description";
import Policy from "./Policy";
import Amenities from "./Amenities";
import DetailCard from "./DetailCard";
import BookingDetails from "./BookingDetails";
import Reviews from "./Reviews";
import DealsHeader from "@/components/nav/DealsHeader";
import Footer from "../../../components/nav/FooterSec";

const DetailsPage = () => {
  const { id } = useParams();

  // Find apartment matching the id
  const apartment = otherApartments.find((apt) => apt.id.toString() === id);

  return (
    <ApartmentContext.Provider value={apartment}>
      <>
        <DealsHeader />
        <div className="screen-container grid grid-cols-1 gap-8 md:grid-cols-[65%_35%] py-6">
          {/* Left Column */}
          <div className="space-y-10">
            <Gallery />
            <Description />
            <Policy />
            <Reviews />
          </div>

          {/* Right Column */}
          <div>
            <DetailCard />
            <Amenities />
            <BookingDetails />
            <EventsCalendar />
          </div>
        </div>
        <Footer />
      </>
    </ApartmentContext.Provider>
  );
};

export default DetailsPage;
