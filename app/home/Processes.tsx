"use client";

import { BtnSecondary } from "@/components/BtnSecondary";
import { ProcessesCarousel } from "@/components/ui/processes-carousel";
import { ProcessesMobileCarousel } from "@/components/ui/processes-mobile-carousel";
import { ArrowRight } from "@phosphor-icons/react";
import { processesCard } from "@/constants";

export const Processes = () => {
  return (
    <section className="py-10 md:py-15 px-4 md:px-8px-4 md:px-8 bg-black">
      <main className="max-w-[1400px] mx-auto  overflow-hidden">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-[30%_70%]">
          {/* Left section */}
          <div className="flex flex-col justify-start gap-6">
            <span className="hFive fadeText uppercase">how it works</span>
            <h2 className=" hThree text-white">
              Check-In. Route. Optimize. Report.
            </h2>
            <span className="hFive tracking-wide fadeText md:mb-6">
              RootsCards turns messy arrivals into streamlined experiences. From
              the moment someone checks in, AI handles the flow of segmenting,
              routing, and optimizing in real time while giving your team the
              insights to act with confidence.
            </span>
            <BtnSecondary
              to="https://app.rootscards.com/signup"
              text="Create an account"
              icon={ArrowRight}
              btnBg="bg-white"
              iconBg="bg-black"
              iconColor="text-white"
              textColor="text-black"
            />
          </div>

          {/* Right section */}
          <div className="hidden md:block overflow-hidden w-full">
            {/* Mobile: show as carousel, Desktop: show normally */}
            <ProcessesCarousel
              data={processesCard}
              direction="left"
              speed={120}
            />
          </div>
          {/* Mobile carousel */}
          <div className="block md:hidden">
            <ProcessesMobileCarousel data={processesCard} />
          </div>
        </div>
      </main>
    </section>
  );
};
