import Image from "next/image";

interface MainCardProps {
  apartment: {
    name: string;
    description: string;
    imageUrl: string;
  };
}

export default function MainFeaturedCard({ apartment }: MainCardProps) {
  return (
    <div className="relative w-full h-[480px] rounded-3xl overflow-hidden">
      {/* Background Image */}
      <Image
        src={apartment.imageUrl}
        alt={apartment.name}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 75vw"
        priority
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/30 p-8 flex flex-col justify-end text-white">
        <h2 className="text-5xl font-semibold mb-2">{apartment.name}</h2>
        <p className="text-lg mb-6">{apartment.description}</p>

        {/* Action Button */}
        <button className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200">
          Get Offer
        </button>
      </div>
    </div>
  );
}
