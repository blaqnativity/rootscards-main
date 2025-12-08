"use client";

import Image from "next/image";
import { BtnMain } from "../BtnMain";
import { ArrowRight } from "@phosphor-icons/react";
import logo from "@/public/darkLogo.svg";
import Link from "next/link";

const DealsHeader = () => {
  return (
    <div className="screen-container flex justify-between items-center py-2 w-full">
      <Link href="#" className="flex items-center gap-1">
        <Image
          src={logo}
          alt="rootscards logo"
          width={150}
          height={24}
          className="h-[1.3em] md:h-[1.5em] w-auto"
        />
        <span className="logoText text-[#0F172A]">rootscards</span>
      </Link>

      <BtnMain
        text="Sign In/ Up"
        icon={ArrowRight}
        iconBg="bg-white"
        iconColor="text-black"
      />
    </div>
  );
};

export default DealsHeader;
