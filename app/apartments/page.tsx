import { ApartmentType } from "./ApartmentType";
import FeaturedApartmentsSection from "./FeaturedApartments";
import DealsSection from "./DealsSection";
import Hero from "./Hero";
import TrendingApartments from "./TrendingApartments";
import OtherApartmentsSection from "./OtherApartmentsSection";
const Apartments = () => {
  return (
    <div>
      <Hero />
      <ApartmentType />
      <FeaturedApartmentsSection />
      <DealsSection />
      <TrendingApartments />
      <OtherApartmentsSection />
    </div>
  );
};

export default Apartments;
