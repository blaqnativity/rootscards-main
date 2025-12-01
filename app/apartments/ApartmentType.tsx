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
    <section className="bg-white p-10 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="hFour font-semibold tracking-tight text-gray-900">
          Apartment Type
        </h1>
      </div>

      <TypeCarousel items={apartmentTypes} />
    </section>
  );
};
