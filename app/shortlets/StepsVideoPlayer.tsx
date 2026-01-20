"use client";
import { useState } from "react";
import Image from "next/image";
import bg from "@/public/videoPrev.svg";
import line from "@/public/line.svg";
import { Play } from "@phosphor-icons/react";

const assets = {
  videoPrev: {
    alt: "Demo Video Thumbnail",
    width: 1200,
    height: 600,
  },
  line: {
    alt: "Decorative Line",
    width: 200,
    height: 20,
  },
};

export const StepsVideoPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* "See a 3-min demo" button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-6 left-6 bg-white/20 backdrop-blur-lg text-white text-sm px-4 py-2 rounded-full z-20"
      >
        See a 3-min demo →
      </button>

      {/* Thumbnail (shown only if video not open) */}
      {!isOpen && (
        <>
          <Image
            src={bg}
            alt={assets.videoPrev.alt}
            width={assets.videoPrev.width}
            height={assets.videoPrev.height}
            className="w-full h-[500px] md:h-[600px] rounded-2xl object-cover"
            priority
          />

          {/* Play button overlay */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
              <Play size={48} color="white" weight="fill" />
            </div>
          </button>

          {/* Caption */}
          <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-white w-[70%] md:w-2xl z-10">
            <p className="hThree leading-8 md:leading-14">
              “How Rootscard eliminates wait time and improves user{" "}
              <div className="ml-3 relative inline-block">
                <Image
                  src={line}
                  alt={assets.line.alt}
                  width={assets.line.width}
                  height={assets.line.height}
                  className="-z-20 w-40 md:w-90 -translate-x-3 translate-y-0.5 md:-translate-x-5 md:translate-y-2 h-auto absolute pointer-events-none"
                />
                <span className="relative z-0">experience</span>
              </div>
            </p>
          </div>
        </>
      )}

      {/* Video player (replaces thumbnail when open) */}
      {isOpen && (
        <div className="w-full h-[500px] md:h-[600px] bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/fkA5bKihJRw?autoplay=1&mute=1&playsinline=1&loop=1&rel=0&controls=1"
            title="Demo Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};
