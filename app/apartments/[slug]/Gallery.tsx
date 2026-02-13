"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import { useApartment } from "@/context/ApartmentContext";

const Gallery = () => {
  const router = useRouter();
  const apartment = useApartment();

  // Use API images or fallback to placeholder
  const images =
    apartment.images.length > 0
      ? apartment.images
      : [{ url: "/placeholder-apartment.jpg", width: 1920, height: 1280 }];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image: (typeof images)[0]) => {
    setSelectedImage(image);
  };

  const handleKeyDown = (e: React.KeyboardEvent, image: (typeof images)[0]) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedImage(image);
    }
  };

  return (
    <div className="w-full relative">
      {/* Main Image */}
      <div className="w-full relative h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={selectedImage.url}
          alt={apartment.name}
          fill
          className="object-cover"
          priority
        />
        {/* Back button */}
        <div
          onClick={() => router.back()}
          className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur-sm rounded-full p-2 cursor-pointer hover:bg-black/60 transition"
        >
          <ArrowLeft size={32} color="white" />
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex mt-4 justify-between gap-2">
        {images.map((image, index) => (
          <div
            key={image.url + index}
            role="button"
            tabIndex={0}
            onClick={() => handleThumbnailClick(image)}
            onKeyDown={(e) => handleKeyDown(e, image)}
            className={`
              relative flex-1 h-[75px] md:h-[100px] 
              cursor-pointer shrink-0 border-2 transition-all overflow-hidden rounded-lg 
              ${
                image === selectedImage
                  ? "border-black/10"
                  : "border-transparent opacity-70 hover:opacity-100"
              }
            `}
          >
            <Image
              src={image.url}
              alt={`${apartment.name} - Photo ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
