"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

interface ApartmentType {
  name: string;
  imageUrl: string;
}

interface TypeCarouselProps {
  items: ApartmentType[];
}

export default function TypeCarousel({ items }: TypeCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);

  const x = useMotionValue(0);
  const springX = useSpring(x, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });

  useEffect(() => {
    const calculateScrollWidth = () => {
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.offsetWidth;
        const contentWidth = scrollRef.current.scrollWidth;
        setScrollWidth(contentWidth - containerWidth);
      }
    };

    calculateScrollWidth();

    window.addEventListener("resize", calculateScrollWidth);
    return () => window.removeEventListener("resize", calculateScrollWidth);
  }, [items.length]);

  // Handler for navigation arrows
  type Direction = "left" | "right";

  const handleScroll = (direction: Direction): void => {
    if (!scrollRef.current) return;

    const scrollDistance = scrollRef.current.offsetWidth;

    let newScroll: number;
    if (direction === "left") {
      newScroll = Math.max(currentScroll - scrollDistance, 0);
    } else {
      newScroll = Math.min(currentScroll + scrollDistance, scrollWidth);
    }

    setCurrentScroll(newScroll);
    x.set(-newScroll);
  };

  const handleDragEnd = () => {
    const newScrollValue = Math.abs(springX.get());
    setCurrentScroll(newScrollValue);
  };

  return (
    <>
      {/* Navigation Arrows (Moved from Parent) */}
      <div className="flex justify-end mb-6">
        <div className="flex space-x-3">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition disabled:opacity-50"
            disabled={currentScroll <= 5}
          >
            {"<"}
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition disabled:opacity-50"
            disabled={currentScroll >= scrollWidth - 5}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Carousel Scroll Container */}
      <div ref={scrollRef} className="overflow-hidden cursor-grab">
        <motion.div
          className="flex space-x-6 pb-2"
          drag="x"
          dragConstraints={{ right: 0, left: -scrollWidth }}
          style={{ x: springX }}
          onDragEnd={handleDragEnd}
          onDragStart={() => (document.body.style.cursor = "grabbing")}
          onMouseUp={() => (document.body.style.cursor = "grab")}
          onMouseLeave={() => (document.body.style.cursor = "default")}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="shrink-0 w-[calc(50%-12px)] sm:w-[calc(33.33%-16px)] lg:w-60 carousel-card"
            >
              <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
                  priority={index < 3}
                />
              </div>
              <p className="mt-2 text-base font-medium text-gray-800">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
