"use client";

import { BtnSecondary } from "@/components/BtnSecondary";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { scheduleDemo } from "@/services/useCalendly";
import useCalendlyLoader from "@/hooks/useCalendlyLoader";
import Image from "next/image";

export const Newsletter = () => {
  useCalendlyLoader();
  return (
    <section className="bg-white py-10 md:py-20 px-4 md:px-8">
      <div className="screen-container bg-[#F6F6F6] mx-auto rounded-3xl grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 items-center py-4 md:py-6">
        {/* Left side image */}
        <div>
          <Image
            src=""
            alt="newsletter"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Right side content */}
        <div className="flex flex-col gap-6">
          {/* Headline */}
          <h2 className="hThree leading-8 md:leading-14 font-bold">
            Ready to make keys and coordinators optional?
          </h2>

          {/* Subtext */}
          <p className="hFIve text-gray-700 w-2/3 md:w-fit">
            Spin up your first unit in minutes. No credit card required.
          </p>

          {/* Input + Button */}
          <form className="flex items-center gap-2 p-1 rounded-4xl border border-gray-200 max-w-xl">
            <input
              type="email"
              placeholder="Work email"
              className="flex-1 px-4 py-2 outline-none rounded-lg"
            />
            <BtnSecondary
              to="https://app.rootscards.com/signup"
              text="Create Account"
              btnBg="bg-black"
              textColor="text-white"
              icon={ArrowRightIcon}
              iconBg="bg-[#444444]"
              iconColor="text-white"
            />
          </form>

          {/* demo link */}
          <span
            className="hFive text-blue-600 text-sm underline cursor-pointer"
            onClick={scheduleDemo}
          >
            Prefer a walkthrough? Book a 15-min demo.
          </span>
        </div>
      </div>
    </section>
  );
};
