"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import darkLogo from "@/public/darkLogo.svg";
import lightLogo from "@/public/lightLogo.svg";

import {
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

export const Footer = ({ theme = "dark" }: { theme?: "light" | "dark" }) => {
  const isLight = theme === "light";

  const bg = isLight ? "bg-[#F9F9F9]" : "bg-black";
  const text = isLight ? "text-black/70" : "text-white/70";
  const textStrong = isLight ? "text-black" : "text-white";
  const divider = isLight ? "bg-black/20" : "bg-white/30";
  const iconColor = isLight ? "#ffffff" : "#000000";
  const iconBgColor = isLight ? "bg-black" : "bg-white";
  const logo: StaticImageData = isLight ? darkLogo : lightLogo;

  return (
    <footer className={`w-full ${bg} py-10 md:py-20`}>
      <div className="flex flex-col gap-10 mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 gap-y-10 items-start">
          {/* section 1: Company Links */}
          <nav className={`flex flex-col gap-4 ${text} text-xs md:text-sm`}>
            <Link
              href="/"
              className={`flex items-baseline gap-1 md:gap-2 ${textStrong}`}
            >
              <Image
                src={logo}
                alt="rootscards logo"
                width={150}
                height={20}
                className="h-[1.1em] md:h-[1.5em] w-auto"
              />
              <span className="logoText lowercase">rootscards</span>
            </Link>
            <Link href="/">Contact</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
          </nav>

          {/* section 2: Advanced Features */}
          <nav className={`flex flex-col gap-4 ${text} text-xs md:text-sm`}>
            <h3 className={`logoText ${textStrong} font-semibold`}>
              Advanced Features
            </h3>
            <Link href="/">AI-Powered Segmentation</Link>
            <Link href="/">Small Identity Engine</Link>
            <Link href="/">Real Time Dashboard</Link>
          </nav>

          {/* section 3: Product */}
          <nav className={`flex flex-col gap-4 ${text} text-xs md:text-sm`}>
            <h3 className={`logoText ${textStrong} font-semibold`}>Product</h3>
            <Link href="/">Rootscard</Link>
            <Link href="/">Rootscard Suite</Link>
            <Link href="/">View Demo</Link>
            <Link href="/">Dev Docs</Link>
          </nav>

          {/* section 4: Support */}
          <nav className={`flex flex-col gap-4 ${text} text-xs md:text-sm`}>
            <h3 className={`logoText ${textStrong} font-semibold`}>Support</h3>
            <Link href="/">Product Updates</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Blogs</Link>
            <Link href="/">Help Docs</Link>
          </nav>

          {/* Social + WhatsApp */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <div className={`${iconBgColor} p-2 rounded-full`}>
                <LinkedinLogo size={18} weight="fill" color={iconColor} />
              </div>
              <div className={`${iconBgColor} p-2 rounded-full`}>
                <InstagramLogo size={18} weight="fill" color={iconColor} />
              </div>
              <div className={`${iconBgColor} p-2 rounded-full`}>
                <YoutubeLogo size={18} weight="fill" color={iconColor} />
              </div>
              <div className={`${iconBgColor} p-2 rounded-full`}>
                <XLogo size={18} weight="fill" color={iconColor} />
              </div>
            </div>

            {/* WhatsApp */}
            <Link
              href="/"
              className="bg-[#1EAE54] flex items-center gap-2 px-4 py-2 rounded-full w-fit text-white"
            >
              <WhatsappLogo size={22} color="#ffffff" />
              Chat on Whatsapp
            </Link>

            <span className={text}>support@rootscard.com</span>
          </div>
        </div>

        {/* divider */}
        <div className={`${divider} h-[1px]`}></div>

        {/* copyright */}
        <span className={`${text} text-xs md:text-sm`}>
          © Copyright rootscard Inc. 2025
        </span>

        {/* legal text */}
        <div className={`${text} text-xs md:text-sm`}>
          <span className={`logoText ${textStrong} font-semibold`}>
            Backed by techstars_
          </span>
          <ul className="mt-4 space-y-4">
            <li>* Mainstack offers its products and services...</li>
            <li>* Mainstack offers its products and services...</li>
            <li>* Mainstack offers its products and services...</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
