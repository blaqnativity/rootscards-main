import type { Metadata } from "next";
import { productSans } from "@/app/ui/fonts";
import Script from "next/script";
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
      {/* 2. External CDN Fonts*/}
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/forum" rel="stylesheet" />
      </head>

      {/* 3. The Body tag */}
      <body className={`${productSans.variable} antialiased`}>{children}</body>

      {/* 4. Microsoft Clarity Script*/}
      <Script id="clarity-script" strategy="afterInteractive">
        {`
          (function (c, l, a, r, i, t, y) {
            c[a] =
              c[a] ||
              function () {
                (c[a].q = c[a].q || []).push(arguments);
              };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "pqozuuat14");
        `}
      </Script>
    </html>
  );
}
