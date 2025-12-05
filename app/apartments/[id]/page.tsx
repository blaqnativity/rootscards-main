import type { Apartment } from "@/constants";
import EventsCalendar from "./EventsCalendar";
import Gallery from "./Gallery";
import Description from "./Description";
import Policy from "./Policy";

// Define the interface for the component's props
interface DetailsPageProps {
  apartment: Apartment;
}

const DetailsPage = ({ apartment }: DetailsPageProps) => {
  return (
    <div className="screen-container grid grid-cols-1 gap-8 md:grid-cols-[65%_35%] py-6">
      {/* Left Column: Media and Descriptions */}
      <div className="space-y-10">
        <Gallery />
        <Description />
        <Policy />
      </div>
      {/* Right Column: Booking Card and Calendar */}
      <div>
        <EventsCalendar />
      </div>
    </div>
  );
};

export default DetailsPage;
