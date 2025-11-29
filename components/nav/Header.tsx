"use client";

import { navMenu as Menus } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/lightLogo.svg";
import { BtnMain } from "@/components/BtnMain";
import { ArrowRight } from "@phosphor-icons/react";
import MobMenu from "./MobMenu";
import { DesktopMenu } from "./DesktopMenu";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 h-16 flex items-center bg-none z-50 w-full">
      <nav className="px-4 flex justify-between items-center w-full max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-1">
          <Image
            src={logo}
            alt="rootscards logo"
            width={150}
            height={24}
            className="h-[1.3em] md:h-[1.5em] w-auto"
          />
          <span className="logoText text-white">rootscards</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {Menus.map((item, index) => (
            <DesktopMenu key={index} item={item} />
          ))}
        </ul>

        {/* Right Side: Mobile Menu + CTA */}
        <div className="flex items-center gap-x-5">
          {/* Mobile menu visible only on small screens */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>

          {/* CTA Button visible on desktop */}
          <div className="hidden md:block">
            <BtnMain
              to="https://app.rootscards.com/signup"
              text="Start free trial"
              icon={ArrowRight}
              btnBg="bg-white"
              textColor="text-black"
              iconBg="bg-black"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
