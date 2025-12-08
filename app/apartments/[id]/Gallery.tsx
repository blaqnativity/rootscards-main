"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import bg from "@/public/kitchen.png";
import pr from "@/public/parlour.png";
import tv from "@/public/tvroom.png";

const photos = [
  {
    src: bg,
    alt: "Spacious main living area with large window and fireplace.",
  },
  {
    src: pr,
    alt: "Modern kitchen with granite countertops and stainless steel appliances.",
  },
  { src: bg, alt: "View of the dining area and open-plan design." },
  { src: tv, alt: "Close-up of the kitchen island." },
];

const Gallery = ({ images = photos }) => {
  const router = useRouter();
  // Initialize state with the full object
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleKeyDown = (e, image) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedImage(image);
    }
  };

  return (
    <div className="w-full relative">
      {/* 1. Main Image*/}
      <div className="w-full relative h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* back button */}
        <div
          onClick={() => router.back()} // Added navigation logic
          className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur-sm rounded-full p-2 cursor-pointer"
        >
          <ArrowLeft size={32} color="white" />
        </div>
      </div>

      {/* 2. Thumbnail Strip */}
      <div className="flex mt-4 justify-between gap-2">
        {images.map((imageObj, index) => (
          <div
            key={imageObj.src.src + index}
            role="button"
            tabIndex={0}
            onClick={() => handleThumbnailClick(imageObj)}
            onKeyDown={(e) => handleKeyDown(e, imageObj)}
            className={`
              relative flex-1 h-[75px] md:h-[100px] 
              cursor-pointer shrink-0 border-2 transition-all overflow-hidden rounded-lg 
              ${
                imageObj === selectedImage
                  ? "border-black/10"
                  : "border-transparent opacity-70 hover:opacity-100"
              }
            `}
          >
            {/* 3. Thumbnail Image with layout="fill" for container control */}
            <Image
              src={imageObj.src}
              alt={imageObj.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
