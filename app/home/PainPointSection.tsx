'use client";';

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

import eventImage from "@/public/images/events.svg";
import eventImage2 from "@/public/images/eventCheck.svg";

export const PainPointSection = () => {
  const slides = [
    {
      title: "Eliminates Bottlenecks at Events",
      image: eventImage,
    },
    {
      title: "Instant Arrivals, No Waits",
      image: eventImage,
    },
    {
      title: "Check-ins faster in seconds",
      image: eventImage2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentIndex];

  return (
    <section className="py-10 md:py-15 bg-[#F6F6F6]">
      <main className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-5">
        <h5 className="hFive blackFade uppercase">the need</h5>
        <h2 className="hThree font-semibold max-w-7xl mb-10">
          Long waits erode revenue and trust. RootsCards eliminates bottlenecks
          with{" "}
          <span className="text-black/60">
            instant arrivals, smart queues, and real insights.
          </span>
        </h2>

        <div className="grid md:grid-cols-[40%_60%] min-h-[70vh] md:min-h-[500px]">
          {/* text box */}
          <div className="bg-[#F9ECC9] flex flex-col gap-6 justify-between p-5 md:p-20">
            {/* top button */}
            <Link
              href="https://app.rootscards.com/signup"
              className="flex items-center gap-1 bg-gray-100 w-fit px-5 py-2 rounded-full"
            >
              <span className="hFour">Explore Experience</span>
              <ArrowUpRight size={18} className="text-gray-600" />
            </Link>

            {/* animated title */}
            <div className="flex-1 flex items-center">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeSlide.title}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="hTwo font-medium titleFont"
                >
                  {activeSlide.title}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* bottom section: dots + arrows */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-4">
                {slides.map((_, idx) => (
                  <span
                    key={idx}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentIndex
                        ? "w-6 h-2 bg-orange-500"
                        : "w-2 h-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="cursor-pointer bg-white p-3 rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <ArrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="cursor-pointer bg-white p-3 rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* image box */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.title}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </main>
    </section>
  );
};
