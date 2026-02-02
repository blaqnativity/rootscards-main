import { ApartmentType } from "./ApartmentType";
import FeaturedApartments from "./FeaturedApartments";
import TopDeals from "./TopDeals";
import Hero from "./Hero";
import TrendingApartments from "./TrendingApartments";
import OtherApartments from "./OtherApartments";
import TopPlaces from "./TopPlaces";
import Footer from "../../components/nav/FooterSec";
const Apartments = () => {
  return (
    <div>
      <Hero />
      <ApartmentType />
      <FeaturedApartments />
      <TopDeals />
      <TrendingApartments />
      <TopPlaces />
      <OtherApartments />
      <Footer />
    </div>
  );
};

export default Apartments;
