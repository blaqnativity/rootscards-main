import { images, carouselTwo as carousels } from "@/constants";
import { ArrowRight } from "@phosphor-icons/react";
import { BtnMain } from "@/components/BtnMain";
import { BtnSecondary } from "@/components/BtnSecondary";
import { scheduleDemo } from "@/services/useCalendly";
import useCalendlyLoader from "@/hooks/useCalendlyLoader";
import { Carousel } from "@/components/LogoCarousel";
export const Hero = () => {
  useCalendlyLoader();
  return (
    <section
      style={{
        backgroundImage: `url(${images.gradientBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-10 md:py-15 relative h-screen w-full overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="max-w-6xl px-4 md:px-8 space-y-10 text-center">
          <h1 className="hOne font-bold">
            Make your shortlets self-serve, fraud-proof, and queue-free
          </h1>
          <p className="hFour max-w-3xl mx-auto tracking-normal">
            RootsCards handles identity, access codes, deposits, and
            housekeeping—so guests check in on WhatsApp, and you stop
            babysitting arrivals.
          </p>

          <div className="flex gap-5 justify-center items-center">
            <BtnSecondary
              to="https://app.rootscards.com/signup"
              text="Start free trial"
              icon={ArrowRight}
            />

            <BtnMain
              text="Book a demo"
              textColor="text-white"
              icon={ArrowRight}
              btnBg="bg-black"
              onClick={scheduleDemo}
            />
          </div>
        </div>

        <div className="w-full absolute -bottom-10 bg-[#222222] flex justify-center items-center border border-[#444444] py-4">
          <Carousel logos={carousels} />
        </div>
      </div>
    </section>
  );
};
