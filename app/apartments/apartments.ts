// images
import imgOne from "@/public/kitchen.png";
import imgTwo from "@/public/parlour2.png";
import imgThree from "@/public/tvroom.png";
import imgFour from "@/public/kitchen.png";

// [Image Data Array]
const apartmentImages = [imgOne, imgTwo, imgThree, imgFour];

// [Helper Functions]
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomAmenities = () => [
  { name: "Bedrooms", quantity: getRandomInt(1, 4), unit: null },
  { name: "Bathrooms", quantity: getRandomInt(1, 3), unit: null },
  { name: "Guests", quantity: getRandomInt(2, 8), unit: null },
  { name: "Sq. Ft.", quantity: getRandomInt(600, 1500), unit: "sq ft" },
  { name: "Wi-Fi", quantity: 1, unit: "Included" },
  { name: "Parking", quantity: 1, unit: "Free" },
  { name: "Pool Access", quantity: 1, unit: "Yes" },
  { name: "Air Conditioning", quantity: 1, unit: "Yes" },
];

// Base data
const baseApartments = [
  {
    id: "1",
    name: "Tally Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦28,000/night",
    discount: "Up to 32% off",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    policy:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    amenities: generateRandomAmenities(),
  },
  {
    id: "2",
    name: "Tai-Solarin Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦20,000/night",
    discount: "Up to 32% off",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    policy:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    amenities: generateRandomAmenities(),
  },
  {
    id: "3",
    name: "Taj Mahal Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦24,000/night",
    discount: "Up to 32% off",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    policy:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    amenities: generateRandomAmenities(),
  },
  {
    id: "4",
    name: "Teslim Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦30,000/night",
    discount: "Up to 32% off",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    policy:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    amenities: generateRandomAmenities(),
  },
  {
    id: "5",
    name: "Tunde Oni Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦29,000/night",
    discount: "Up to 32% off",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    policy:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    amenities: generateRandomAmenities(),
  },
  {
    id: "6",
    name: "Teju Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦20,000/night",
    discount: "Up to 32% off",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    policy:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    amenities: generateRandomAmenities(),
  },
  {
    id: "7",
    name: "TedEx Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦27,000/night",
    discount: "Up to 32% off",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    policy:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    amenities: generateRandomAmenities(),
  },
  {
    id: "8",
    name: "Tade Apartment",
    location: "Dopemu, Lagos",
    rating: 4.6,
    oldPrice: "₦33,000",
    newPrice: "₦23,000/night",
    discount: "Up to 32% off",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    policy:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    amenities: generateRandomAmenities(),
  },
];

export const otherApartments = baseApartments.map((apt) => ({
  ...apt,
  imageUrl: apartmentImages[Math.floor(Math.random() * apartmentImages.length)],
}));
