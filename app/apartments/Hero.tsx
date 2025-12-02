import Image from "next/image";
import DealsHeader from "@/components/nav/DealsHeader";
import { SearchBar } from "@/components/SearchBar";

const BANNER_IMAGE_HEIGHT = "h-[360px]";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden h-[70vh]">
      {/* 1. Header/Nav */}
      <DealsHeader />

      {/* 2. Banner and Search Bar Wrapper */}
      <div className={`relative w-full ${BANNER_IMAGE_HEIGHT} bg-gray-900`}>
        {/* Banner Image */}
        <Image
          src="/banner.jpg"
          alt="Discount background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full z-20">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
