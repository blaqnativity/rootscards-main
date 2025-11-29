// app/ui/fonts.ts

import localFont from "next/font/local";

export const productSans = localFont({
  src: [
    // --- Thin (100) ---
    {
      path: "../../public/fonts/google-sans/ProductSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/google-sans/ProductSans-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    // --- Light (300) ---
    {
      path: "../../public/fonts/google-sans/ProductSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/google-sans/ProductSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    // --- Regular (400) ---
    {
      path: "../../public/fonts/google-sans/ProductSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/google-sans/ProductSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    // --- Medium (500) ---
    {
      path: "../../public/fonts/google-sans/ProductSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/google-sans/ProductSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    // --- Bold (700) ---
    {
      path: "../../public/fonts/google-sans/ProductSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/google-sans/ProductSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    // --- Black (900) ---
    {
      path: "../../public/fonts/google-sans/ProductSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/google-sans/ProductSans-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-product-sans",
});
