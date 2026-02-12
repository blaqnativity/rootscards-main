"use client";

import { createContext, useContext } from "react";

export interface Apartment {
  id: number;
  name: string;
  location: string;
  city: string;
  rating: number;
  price_per_night: number;
  caution_fee: number;
  discount_percent: number;
  guests_max: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: string[];
  tags: string[];
  description: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
  created_at: string;
}

export const ApartmentContext = createContext<Apartment | null>(null);

export const useApartment = () => {
  const context = useContext(ApartmentContext);
  if (!context) {
    throw new Error(
      "useApartment must be used within ApartmentContext.Provider",
    );
  }
  return context;
};
