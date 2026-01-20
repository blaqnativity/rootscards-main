import { Features } from "./Feature";
import { Hero } from "./Hero";
import { Steps } from "./Steps";
import Pricing from "./Pricing";
import HeaderSec from "@/components/nav/HeaderSec";
import { Footer } from "@/components/nav/Footer";
import { Ratings } from "./Ratings";
import { FAQ } from "@/components/FAQ";
import { ShortletsFAQ } from "@/constants";
// import { Newsletter } from "./Newsletter";

const Shortlets = () => {
  return (
    <>
      <HeaderSec />
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <Ratings />
      <FAQ data={ShortletsFAQ} />
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
};

export default Shortlets;
