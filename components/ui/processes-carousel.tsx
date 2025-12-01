"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image, { StaticImageData } from "next/image";

interface ProcessItem {
  tagline?: string;
  title?: string;
  description?: string;
  image?: StaticImageData;
  color?: string;
}

interface ProcessesCarouselProps {
  data: ProcessItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow" | number;
  pauseOnHover?: boolean;
  className?: string;
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
}

export const ProcessesCarousel = ({
  data,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  gap = 40,
  fadeOut = true,
  fadeOutColor = "white",
}: ProcessesCarouselProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicates content for infinite scroll effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      // Sets CSS variables for the animation keyframes
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      if (typeof speed === "number") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          `${speed}s`
        );
      } else if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
      style={{
        WebkitMaskImage: fadeOut
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 0.5%, ${fadeOutColor} 99%, transparent)`
          : undefined,
        maskImage: fadeOut
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 0.5%, ${fadeOutColor} 99%, transparent)`
          : undefined,
      }}
    >
      <ul
        ref={scrollerRef}
        style={{ gap }}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap py-2",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        onTouchStart={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
        }}
        onTouchEnd={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "running";
        }}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="w-[350px] md:w-[400px] flex-shrink-0 flex flex-col justify-between shadow-sm rounded-[49px] bg-[#222222] overflow-hidden transition-opacity duration-500 border border-[#555555]"
          >
            <div className="px-6 space-y-2 py-6">
              <div className="flex justify-between items-center">
                <span className="bg-[#111111] text-white px-4 py-2 rounded-full">
                  {item.tagline}
                </span>
                <span
                  className="bg-white p-2 flex justify-center items-center rounded-full"
                  style={{ backgroundColor: item.color }}
                >
                  <ArrowUpRight size={18} weight="bold" />
                </span>
              </div>
              <h3 className="headerThree text-white font-semibold md:w-60">
                {item.title}
              </h3>
              <p className="text-white md:w-[85%] tracking-widest">
                {item.description}
              </p>
            </div>

            {/* 🛠️ FIX 1: Use Next.js Image component */}
            {item.image && (
              <div className="relative w-full h-auto">
                <Image
                  src={item.image}
                  alt={item.title || "Process illustration"}
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
