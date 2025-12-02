import OtherApartmentCard from "./OtherApartmentCard";

//Data Structure
const otherApartments = [
  {
    name: "Tally Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-1.jpg",
  },
  {
    name: "Tally Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-2.jpg",
  },
  {
    name: "Tally Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-3.jpg",
  },
  {
    name: "Tally Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-4.jpg",
  },
  {
    name: "Tally Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-5.jpg",
  },
  {
    name: "Tally Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-6.jpg",
  },
  {
    name: "Tally Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦25,000/night",
    discount: "Up to 32% off",
    imageUrl: "/other-apt-7.jpg",
  },
  {
    name: "Tally Apartment",
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
    <section className="py-15">
      <div className="screen-container">
        {/* Section Title */}
        <h1 className="hFour font-semibold tracking-tight text-gray-900 mb-8">
          Others
        </h1>

        {/* Apartment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {otherApartments.map((apt, index) => (
            <OtherApartmentCard key={index} apartment={apt} />
          ))}
        </div>
      </div>
    </section>
  );
}
