'use client";';

import { LogoCarousel } from "@/components/ui/logo-carousel";

interface CarouselProps {
  title?: string;
  logos: { src: string; alt: string }[];
  speed?: "fast" | "normal" | "slow";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  gap?: number;
  scaleOnHover?: boolean;
  logoHeight?: number;
  className?: string;
  innerClassName?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  title = "Connect what you already use",
  logos,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  gap = 80,
  scaleOnHover = true,
  logoHeight = 24,
  innerClassName = "max-w-[1400px] px-4 md:px-8 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center w-full",
}) => {
  return (
    <section>
      <div className={innerClassName}>
        {/* Left side (optional) */}
        {title && (
          <div>
            <span className="hFive text-white">{title}</span>
          </div>
        )}

        {/* Right side: animated logos */}
        <div className="md:w-[80%]">
          <LogoCarousel
            logos={logos}
            speed={speed}
            direction={direction}
            pauseOnHover={pauseOnHover}
            gap={gap}
            scaleOnHover={scaleOnHover}
            logoHeight={logoHeight}
          />
        </div>
      </div>
    </section>
  );
};
