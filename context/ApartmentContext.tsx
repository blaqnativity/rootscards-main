"use client";

import { createContext, useContext } from "react";

export const ApartmentContext = createContext(null);

export const useApartment = () => useContext(ApartmentContext);
