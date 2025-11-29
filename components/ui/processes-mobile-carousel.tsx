"use client";

import { useState, useId } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { processesCard } from "@/constants";

type ProcessType = {
  tagline?: string;
  title?: string;
  description: string;
  image: StaticImageData;
  color?: string;
};

const ProcessSlide = ({
  process,
  index,
  current,
  handleSlideClick,
}: {
  process: ProcessType;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}) => {
  const isActive = current === index;
  return (
    <div
      className="flex flex-col justify-between shadow-sm rounded-[49px] bg-[#222222] overflow-hidden transition-all duration-500 border border-[#555555] w-[90%] mx-auto cursor-pointer"
      onClick={() => handleSlideClick(index)}
      style={{
        opacity: isActive ? 1 : 0.6,
        transform: isActive ? "scale(1)" : "scale(0.95)",
        transition: "all 0.5s ease",
      }}
    >
      <div className="px-6 space-y-2 py-6">
        <div className="flex justify-between items-center">
          <span className="bg-[#111111] text-white px-4 py-2 rounded-full">
            {process.tagline}
          </span>
          <span
            className="p-2 flex justify-center items-center rounded-full"
            style={{ backgroundColor: process.color }}
          >
            <ArrowUpRight size={18} weight="bold" />
          </span>
        </div>
        <h3 className="headerThree text-white font-semibold">
          {process.title}
        </h3>
        <p className="text-white tracking-widest">{process.description}</p>
      </div>

      <div className="relative w-full h-auto md:h-60">
        <Image
          src={process.image}
          alt={process.title || "Process illustration"}
          width={400}
          height={240}
          className="w-full block object-cover rounded-b-[49px]"
        />
      </div>
    </div>
  );
};

const CarouselControl = ({
  type,
  title,
  handleClick,
}: {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      title={title}
      aria-label={title}
      className={`w-8 h-8 flex items-center justify-center mx-1 
        bg-black/40 hover:bg-black/60 text-white rounded-full 
        transition duration-200 pointer-events-auto shadow-md
        ${type === "previous" ? "rotate-180" : ""}`}
    >
      <ArrowUpRight size={16} />
    </button>
  );
};

export const ProcessesMobileCarousel = ({
  data = processesCard,
}: {
  data?: ProcessType[];
}) => {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const slideWidth = 100 / data.length;

  return (
    <div
      className="relative w-full overflow-hidden"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * slideWidth}%)`,
          width: `${data.length * 100}%`,
        }}
      >
        {data.map((process, index) => (
          <li
            key={index}
            className="shrink-0 flex justify-center"
            style={{ width: `${slideWidth}%` }}
          >
            <ProcessSlide
              process={process}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          </li>
        ))}
      </ul>

      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};
