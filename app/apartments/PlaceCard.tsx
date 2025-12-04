import Image from "next/image";

interface Place {
  name: string;
  imageUrl: string;
  size: "large" | "small";
}

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  // Determine card height and width based on size prop for grid layout
  const cardClasses =
    place.size === "large"
      ? "md:col-span-1 lg:col-span-1 h-[250px] md:h-[300px]"
      : "md:col-span-1 lg:col-span-1 h-[250px]";

  // On MD screens and above, the first two cards span the width to fill the top row
  const layoutAdjustmentClasses = (index) => {
    if (index === 0 || index === 1) {
      return "md:col-span-2 lg:col-span-2";
    }
    return "md:col-span-1 lg:col-span-1";
  };

  return (
    <div
      // Apply base classes and then dynamic sizing based on size prop
      className={`relative w-full rounded-xl overflow-hidden cursor-pointer transition duration-300 ${cardClasses}`}
    >
      {/* Background Image */}
      <Image
        src={place.imageUrl}
        alt={place.name.split(" ")[0]}
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Content Overlay at the Bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent p-4 flex items-end">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          {place.name}
        </h3>
      </div>
    </div>
  );
}
