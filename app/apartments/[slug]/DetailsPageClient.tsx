"use client";

import { ApartmentContext, Apartment } from "@/context/ApartmentContext";
import EventsCalendar from "./EventsCalendar";
import Gallery from "./Gallery";
import Description from "./Description";
import Policy from "./Policy";
import Amenities from "./Amenities";
import DetailCard from "./DetailCard";
import BookingDetails from "./BookingDetails";
import Reviews from "./Reviews";
import DealsHeader from "@/components/nav/DealsHeader";
import Footer from "@/components/nav/FooterSec";
import Map from "./Map";

interface DetailsPageClientProps {
  apartment: Apartment;
}

export default function DetailsPageClient({
  apartment,
}: DetailsPageClientProps) {
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
            <Map />
            <Reviews />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
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
}
