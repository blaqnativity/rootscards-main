import { fetchFromAPI } from "@/utils/api";
import { fetchApartmentBySlug } from "@/lib/apartmentUtils";
import { notFound } from "next/navigation";
import DetailsPageClient from "./DetailsPageClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // Added await here

  // Fetch apartment data using slug
  const apartment = await fetchApartmentBySlug(slug, fetchFromAPI);

  // Show 404 if apartment not found
  if (!apartment) {
    notFound();
  }

  return <DetailsPageClient apartment={apartment} />;
}
