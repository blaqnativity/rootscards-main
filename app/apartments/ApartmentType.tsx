import TypeCarousel from "./TypeCarousel";
import loft from "@/public/loft.png";
import studio from "@/public/studio.png";
import duplex from "@/public/duplex.png";
import garden from "@/public/garden.png";
import basement from "@/public/basement.png";
import penthouse from "@/public/penthouse.png";

const apartmentTypes = [
  { name: "Studio", imageUrl: studio },
  { name: "Loft", imageUrl: loft },
  { name: "Duplex", imageUrl: duplex },
  { name: "Garden apartment", imageUrl: garden },
  { name: "Penthouse", imageUrl: penthouse },
  { name: "Basement apartment", imageUrl: basement },
];

export const ApartmentType = () => {
  return (
    <section className="bg-[#f6f6f6] py-15">
      <div className="screen-container">
        <TypeCarousel items={apartmentTypes} />
      </div>
    </section>
  );
};
