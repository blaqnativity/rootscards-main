"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MenuItem {
  menu: string;
  url?: string;
  submenu?: Array<{
    title: string;
    description: string;
    url: string;
  }>;
}

export function DesktopMenu({ item }: { item: MenuItem }) {
  const [isHover, setHover] = useState(false);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
      transitionEnd: { display: "none" },
    },
  };

  const hasSubMenu = Array.isArray(item.submenu) && item.submenu.length > 0;

  return (
    <motion.li
      className="relative list-none"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {/* Top-level nav label/link: 
        Conditionally render a Link (for single pages) or a div (for the dropdown trigger)
      */}
      <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-200 hover:text-white cursor-pointer">
        {hasSubMenu ? (
          // Use a span/div for the menu that triggers a dropdown
          <span>{item.menu}</span>
        ) : (
          // Use Link for menus that are direct links
          <Link
            href={item.url || "#"}
            className="text-gray-200 hover:text-white transition duration-150"
          >
            {item.menu}
          </Link>
        )}

        {hasSubMenu && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isHover ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Mega dropdown */}
      {hasSubMenu && (
        <motion.div
          variants={subMenuAnimate}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          className="absolute left-1/2 -translate-x-1/2 mt-3 w-max max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl z-50"
        >
          <div className="grid grid-cols-3 gap-10 px-10 py-10">
            {/* LEFT COLUMN — Feature Cards */}
            <div className="col-span-1 flex flex-col gap-6">
              <Link
                href="/products"
                className="p-6 rounded-xl bg-gradient-to-tr from-yellow-100 via-pink-100 to-blue-100 hover:opacity-90 transition flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900">
                  Products Overview
                </span>
                <ArrowRight size={16} className="text-gray-700" />
              </Link>

              <Link
                href="/demo"
                className="p-6 rounded-xl bg-gradient-to-tr from-green-100 via-yellow-100 to-pink-100 hover:opacity-90 transition flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900">View demo</span>
                <ArrowRight size={16} className="text-gray-700" />
              </Link>
            </div>

            {/* RIGHT SECTION — Product Links */}
            <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-6">
              {item.submenu?.map((sub, i) => (
                <Link key={i} href={sub.url} className="group block">
                  <h6 className="font-semibold text-gray-900 flex items-center gap-1 group-hover:text-blue-700 transition">
                    {sub.title}
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 translate-x-0.5 transition-all"
                    />
                  </h6>
                  <p className="text-sm text-gray-500 leading-snug">
                    {sub.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
