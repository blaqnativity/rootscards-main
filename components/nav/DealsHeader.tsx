"use client";

import Image from "next/image";
import { BtnMain } from "../BtnMain";
import { ArrowRight } from "@phosphor-icons/react";
import logo from "@/public/darkLogo.svg";
import Link from "next/link";

const LogoAnnouncementPill = () => (
  <Link
    href="#"
    className="flex items-center gap-1 bg-gray-200 py-1 pl-1 pr-3 rounded-full"
  >
    <div className="flex items-center justify-center bg-white rounded-full p-2">
      <Image
        src={logo}
        alt="Rootscard Logo"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </div>
    <span className="logoText">Rootscard is live!</span>
  </Link>
);

const DealsHeader = () => {
  return (
    <div className="screen-container flex justify-between items-center py-2 w-full">
      <LogoAnnouncementPill />

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
