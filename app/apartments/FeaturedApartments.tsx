import MainFeaturedCard from "./MainFeaturedCard";
import SideApartmentCard from "./SideApartmentCard";

const featuredApartment = {
  name: "Mi Casa Delivo",
  description: "Lorem ipsum",
  imageUrl: "/featured-delivo.jpg",
};

const sideApartments = [
  { name: "Damjuri Lovada", rating: 4.5, imageUrl: "/side-lovada.jpg" },
  { name: "Howali Kebbi", rating: 5, imageUrl: "/side-kebbi.jpg" },
  { name: "Lovina Lore", rating: 5, imageUrl: "/side-lore.jpg" },
];

export default function FeaturedApartmentsSection() {
  return (
    <section className="screen-container mx-auto px-4 py-12 md:py-16 font-sans">
      {/* Section Title */}
      <h1 className="hFour font-semibold tracking-tight text-gray-900 mb-8">
        Featured Apartments
      </h1>

      {/* Grid Layout for Main Card and Side Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Card (Takes 3/4 width on large screens) */}
        <div className="lg:col-span-3">
          <MainFeaturedCard apartment={featuredApartment} />
        </div>

        {/* Side Cards (Takes 1/4 width on large screens) */}
        <div className="lg:col-span-1 flex justify-between flex-col space-y-4">
          {sideApartments.map((apt, index) => (
            <SideApartmentCard key={index} apartment={apt} />
          ))}
        </div>
      </div>
    </section>
  );
}
