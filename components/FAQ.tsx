"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  title?: string | React.ReactNode;
  data: FAQItem[];
}

export const FAQ = ({
  title = "Frequently Asked Questions",
  data,
}: FAQProps) => {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(
    data.map(() => false)
  );

  const handleToggle = (idx: number) => {
    setOpenIndexes((prev) => prev.map((open, i) => (i === idx ? !open : open)));
  };

  return (
    <div className="w-full bg-[#f6f6f6]">
      <div className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12">
        {/* Left side */}
        <div className="flex flex-col text-left basis-1/2">
          {typeof title === "string" ? (
            <p className="hThree font-semibold whitespace-pre-line md:leading-14 max-w-xl">
              {title}
            </p>
          ) : (
            title
          )}
        </div>

        {/* FAQ list */}
        <ul className="basis-1/2">
          {data.map((item, index) => {
            const isOpen = openIndexes[index];

            return (
              <li className="border-b border-black/30" key={index}>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left md:text-lg"
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(index)}
                >
                  <span className="flex-1 hFive">{item.question}</span>
                  <CaretDownIcon
                    size={20}
                    weight="bold"
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                  style={{ transition: "max-height 0.3s ease-in-out" }}
                >
                  <div className="hFive pb-5 leading-relaxed blackFade space-y-2">
                    {item.answer}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
