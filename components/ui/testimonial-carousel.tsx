"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

type TestimonialItem = {
  text: string;
  name: string;
  role: string;
  avatar: StaticImageData;
};

interface TestimonialCarouselProps {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const TestimonialCarousel = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: TestimonialCarouselProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  // 💡 IMPROVEMENT: Consolidate speed logic into a stable function
  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  // 💡 IMPROVEMENT: Consolidate direction logic into a stable function
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty(
        "--animation-direction",
        animationDirection
      );
    }
  }, [direction]);

  // 💡 IMPROVEMENT: Consolidate animation setup into a stable function
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone content to enable infinite loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        // We ensure the ref is current before appending, simplifying the check
        scrollerRef.current!.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]); // Dependencies added

  // 🛠️ FIX 3: Update useEffect dependencies
  // The dependencies are crucial here because direction/speed can change,
  // and the effect relies on the stable `addAnimation` function.
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        // Tailwind mask is slightly cleaner than inline style for this
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
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
        {items.map((item, index) => (
          // 💡 IMPROVEMENT: Use <li> element for semantic correctness within <ul>
          <li
            key={index}
            className="card flex-shrink-0 w-[300px] p-6 bg-[#1a1a1a] rounded-xl border border-[#333]"
          >
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              {item.text}
            </p>
            <div className="flex items-center gap-3 overflow-hidden">
              {/* 🛠️ FIX 1: Use Next.js Image component */}
              <Image
                src={item.avatar}
                alt={item.name}
                width={40} // Defined width
                height={40} // Defined height
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-sm text-white font-semibold">{item.name}</p>
                <p className="text-xs text-neutral-400">{item.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
