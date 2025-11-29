import type { Metadata } from "next";
import { productSans } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "rootscard",
  description:
    "Process thousands in seconds with AI-powered check-ins, automated queue routing and live insights—built for events, clinics, coworking and retail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${productSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
