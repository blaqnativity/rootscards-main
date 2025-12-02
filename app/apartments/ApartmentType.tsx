import TypeCarousel from "./TypeCarousel";

const apartmentTypes = [
  { name: "Studio", imageUrl: "https://i.imgur.com/Gj9c9xY.png" },
  { name: "Loft", imageUrl: "https://i.imgur.com/v8tT9oX.png" },
  { name: "Duplex", imageUrl: "https://i.imgur.com/R3xM3qS.png" },
  { name: "Garden apartment", imageUrl: "https://i.imgur.com/W2d5w0l.png" },
  { name: "Penthouse", imageUrl: "https://i.imgur.com/gYf7yL9.png" },
  { name: "Basement apartment", imageUrl: "https://i.imgur.com/yv9bL0n.png" },
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
