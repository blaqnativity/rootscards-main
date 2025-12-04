import PlaceCard from "./PlaceCard";

const topPlaces = [
  // Top Row - Large Cards
  {
    name: "Country Side 🌿",
    imageUrl: "/place-countryside.jpg",
    size: "large",
  },
  { name: "Mountains 🏔️", imageUrl: "/place-mountains.jpg", size: "large" },

  // Bottom Row - Small Cards
  { name: "City 🏙️", imageUrl: "/place-city.jpg", size: "small" },
  { name: "Urban 🌆", imageUrl: "/place-urban.jpg", size: "small" },
  {
    name: "Central Business District 🏢",
    imageUrl: "/place-cbd.jpg",
    size: "small",
  },
];

export default function TopPlaces() {
  return (
    <section className="bg-[#f6f6f6] py-15">
      <div className="screen-container">
        {/* Section Title */}
        <h1 className="hFour font-semibold tracking-tight text-gray-900 mb-8">
          Top Places to Be
        </h1>

        {/* Place Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {topPlaces.map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
}
