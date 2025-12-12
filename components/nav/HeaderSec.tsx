"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { BtnMain } from "@/components/BtnMain";
import logo from "@/public/lightLogo.svg";
import Image from "next/image";

const menu = [
  { title: "View Demo", url: "#" },
  { title: "Pricing", url: "#" },
  { title: "Sign In/ Up", url: "#" },
];

const HeaderSec = () => {
  return (
    <>
      {/* Desktop Nav */}
      <header className="absolute top-0 left-0 h-16 flex items-center bg-none z-50 w-full">
        <nav className="px-4 flex justify-between items-center w-full screen-container">
          {/* Logo */}
          <Link href="/shortlets" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="rootscards logo"
              width={150}
              height={24}
              className="h-[1.3em] md:h-[1.5em] w-auto"
            />
            <span className="logoText text-white">rootscards</span>
          </Link>

          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-6 text-white">
            {menu.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="custom-link hover:opacity-80 transition-opacity duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <BtnMain
              to="https://app.rootscards.com/signup"
              text="Start free trial"
              icon={ArrowRight}
              btnBg="bg-white"
              textColor="text-black"
              iconBg="bg-black"
            />
          </ul>
        </nav>
      </header>

      {/* Mobile Nav (scroll-reactive) */}
    </>
  );
};

export default HeaderSec;
