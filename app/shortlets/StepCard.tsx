import Image from "next/image";

export const StepCard = ({ image, title, desc }) => (
  <div className="bg-white p-2 rounded-2xl border border-[#DDDDDD] flex flex-col space-y-4">
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 1024px) 50vw, 25vw"
      />
    </div>

    <div className="p-4">
      <h3 className="hFour font-semibold">{title}</h3>
      <p className="hFive blackFade">{desc}</p>
    </div>
  </div>
);
