import Image from "next/image";

const Amenities = () => {
  const amenities = [
    { icon: "bath", label: "Bath" },
    { icon: "bed", label: "Bedroom" },
    { icon: "work", label: "Workspace" },
    { icon: "garage", label: "Garage" },
    { icon: "wifi", label: "Wifi" },
    { icon: "ac", label: "Air Conditioning" },
    { icon: "solar", label: "Solar" },
    { icon: "pool", label: "Swimming Pool" },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 p-6">
      {amenities.map((feature, id) => (
        <div
          key={id}
          className="bg-[#F1F4F9] rounded-2xl py-2 text-center text-xs space-y-3 flex flex-col items-center justify-center"
        >
          <span> {feature.label}</span>
          <Image
            src={`/amenities/${feature.icon}.png`}
            alt={feature.label}
            width={4}
            height={2}
          />
        </div>
      ))}
    </div>
  );
};

export default Amenities;
