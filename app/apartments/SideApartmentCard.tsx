import Image from "next/image";

interface SideCardProps {
  apartment: {
    name: string;
    rating: number;
    imageUrl: string;
  };
}

const StarRating = ({ rating }: { rating: number }) => {
  // Simple component to render star icons based on rating
  const fullStars = Math.floor(rating);
  const stars = Array(5)
    .fill(null)
    .map((_, i) => (
      <span
        key={i}
        className={i < fullStars ? "text-yellow-400" : "text-gray-400"}
      >
        ★
      </span>
    ));
  return <div className="text-xs">{stars}</div>;
};

export default function SideApartmentCard({ apartment }: SideCardProps) {
  return (
    // Card Container
    <div className="relative w-full h-32 rounded-xl overflow-hidden cursor-pointer transition">
      {/* Background Image */}
      <Image
        src={apartment.imageUrl}
        alt={apartment.name}
        fill
        className="object-cover"
        sizes="25vw"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent p-3 flex flex-col justify-end text-white">
        <p className="text-sm font-semibold truncate">{apartment.name}</p>
        <StarRating rating={apartment.rating} />
      </div>
    </div>
  );
}
