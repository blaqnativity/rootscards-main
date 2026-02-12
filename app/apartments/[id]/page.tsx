import { fetchFromAPI } from "@/utils/api";
import { fetchApartmentById } from "@/lib/apartmentUtils";
import { notFound } from "next/navigation";
import DetailsPageClient from "./DetailsPageClient";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  // Fetch apartment data from API
  const apartment = await fetchApartmentById(id, fetchFromAPI);

  // Show 404 if apartment not found
  if (!apartment) {
    notFound();
  }

  return <DetailsPageClient apartment={apartment} />;
}
