import Image from "next/image";

const places = [
  { id: 1, title: "Country Side 🌳", imageUrl: "/images/countryside.jpg" },
  { id: 2, title: "Mountains ⛰️", imageUrl: "/images/mountains.jpg" },
  { id: 3, title: "City 🏙️", imageUrl: "/images/city.jpg" },
  { id: 4, title: "Urban 🧱", imageUrl: "/images/urban.jpg" },
  { id: 5, title: "Central Business District 🗽", imageUrl: "/images/cbd.jpg" },
];

const TopPlacesSection = () => {
  return (
    <section className="screen-container p-4 md:p-8">
      <h2 className="text-4xl font-semibold mb-6">Top Places to Be</h2>

      {/* GRID CONTAINER:
        - Mobile: grid-cols-1 (Full stacking is best for small screens)
        - Desktop/Tablet: grid-cols-6 to allow for clean 3x3 division (3 cols on the bottom row)
      */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:h-120">
        {places.map((place, index) => {
          let spanClasses = "";

          if (index === 0 || index === 1) {
            spanClasses = "md:col-span-3 h-56 md:h-full";
          } else {
            spanClasses = "md:col-span-2 h-56 md:h-full";
          }

          return (
            <div
              key={place.id}
              className={`
                relative overflow-hidden rounded-xl 
                transition duration-300 ease-in-out transform 
                ${spanClasses}
              `}
            >
              {/* Image Component */}
              <Image
                src={place.imageUrl}
                alt={place.title}
                fill={true}
                className="object-cover transition duration-300 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="text-xl font-bold">{place.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopPlacesSection;
