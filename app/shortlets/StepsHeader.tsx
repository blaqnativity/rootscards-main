"use client";
import { BtnMain } from "@/components/BtnMain";
import { ArrowRight } from "@phosphor-icons/react";

export const StepsHeader = () => (
  <div className="flex flex-col items-start gap-3 md:gap-0 md:flex-row justify-between">
    {/* Left side: heading */}
    <div>
      <span className="hFive uppercase tracking-wide text-gray-600">
        how it works
      </span>
      <h2 className="hTwo font-bold max-w-2xl md:leading-18">
        <span className="text-black/50">From booking to </span>
        <br className="hidden md:block" />
        checkout in 4 steps
      </h2>
    </div>

    {/* Right side: text + CTA */}
    <div className="space-y-3 text-start">
      <p className="hFive max-w-xs text-gray-700">
        Mirrors your current process — just faster, auditable, and less human
        error.
      </p>
      <BtnMain
        to="https://app.rootscards.com/signup"
        text="Start free trial"
        icon={ArrowRight}
        btnBg="bg-black"
        textColor="text-white"
      />
    </div>
  </div>
);
