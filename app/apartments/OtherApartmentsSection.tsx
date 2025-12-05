import OtherApartmentCard from "./OtherApartmentCard";

// Data Structure (Moved outside the component for clean separation)
const otherApartments = [
  {
    id: "1",
    name: "Tally Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-1.jpg",
  },
  {
    id: "2",
    name: "Tai-Solarin Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-2.jpg",
  },
  {
    id: "3",
    name: "Taj Mahal Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-3.jpg",
  },
  {
    id: "4",
    name: "Teslim Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-4.jpg",
  },
  {
    id: "5",
    name: "Tunde Oni Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-5.jpg",
  },
  {
    id: "6",
    name: "Teju Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-6.jpg",
  },
  {
    id: "7",
    name: "TedEx Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-7.jpg",
  },
  {
    id: "8",
    name: "Tade Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-8.jpg",
  },
];

export default function OtherApartmentsSection() {
  return (
    <section className="py-12">
      <div className="screen-container">
        <h2 className="text-2xl font-bold mb-6">Explore Other Apartments</h2>
        {/* Apartment Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {otherApartments.map((apt) => (
            // Using the stable and unique 'id' as the key is best practice
            <OtherApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      </div>
    </section>
  );
}
