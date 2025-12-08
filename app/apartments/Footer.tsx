"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LinkedinLogo,
  YoutubeLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react";

const CONTACT_EMAIL = "support@rootscard.sm";

const Footer = () => {
  const socialLinks = [
    { href: "https://linkedin.com", Icon: LinkedinLogo, title: "LinkedIn" },
    { href: "https://youtube.com", Icon: YoutubeLogo, title: "YouTube" },
    { href: "https://instagram.com", Icon: InstagramLogo, title: "Instagram" },
    { href: "https://x.com", Icon: XLogo, title: "X (formerly Twitter)" },
  ];

  return (
    <footer className="bg-gray-100 py-3">
      <div className="screen-container flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <Image
              src="/darkLogo.svg"
              alt="RootsCard Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="logoText text-[#0F172A]">rootscards</span>
        </Link>

        {/* 2. Social Icons (Center Section) */}
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition hover:opacity-80"
            >
              <link.Icon size={18} weight="fill" />
            </a>
          ))}
        </div>

        <div className="flex items-center logoText text-gray-500">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hover:text-black transition "
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
