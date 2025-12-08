import { ApartmentType } from "./ApartmentType";
import FeaturedApartments from "./FeaturedApartments";
import DealsSection from "./DealsSection";
import Hero from "./Hero";
import TrendingApartments from "./TrendingApartments";
import OtherApartmentsSection from "./OtherApartmentsSection";
import TopPlaces from "./TopPlaces";
import Footer from "./Footer";
const Apartments = () => {
  return (
    <div>
      <Hero />
      <ApartmentType />
      <FeaturedApartments />
      <DealsSection />
      <TrendingApartments />
      <TopPlaces />
      <OtherApartmentsSection />
      <Footer />
    </div>
  );
};

export default Apartments;
