import { Features } from "./Feature";
import { Hero } from "./Hero";
import { Steps } from "./Steps";
import Pricing from "./Pricing";
import HeaderSec from "@/components/nav/HeaderSec";
import Footer from "@/components/nav/FooterSec";

const Shortlets = () => {
  return (
    <>
      <HeaderSec />
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
};

export default Shortlets;
