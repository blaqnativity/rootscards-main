import Image from "next/image";
import DealsHeader from "@/components/nav/DealsHeader";
import { SearchBar } from "@/components/SearchBar";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <DealsHeader />
      <Image
        src=""
        alt="Discount background"
        fill
        className="object-contain"
        sizes="100vw"
        priority
      />
      <SearchBar />
    </div>
  );
};

export default Hero;
