// ============================================================
// 🖼️ IMAGES
// ============================================================
import { images } from "@/constants";

// ============================================================
// 🔢 TYPES & INTERFACES
// ============================================================
// MENU ITEMS
export interface SubNavItem {
  title: string;
  description: string;
  url: string;
  icon?: React.FC<{ size?: number }>;
}

// navMenu types for main nav with submenu
interface NavItem {
  menu: string;
  url?: string;
  submenu?: SubNavItem[];
  icon?: React.FC<{ size?: number }>;
}

// navMenu2 types for secondary nav without submenu
interface SimpleNavItem {
  menu: string;
  url: string;
  icon?: React.FC<{ size?: number }>;
}

export interface Apartment {
  img: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  oldPrice: number;
  discount: number;
}

// 🧩 Carousel
export type CarouselLogo = {
  src: string;
  alt: string;
};

// ⚙️ Processes / Waitlist
export interface Processes {
  tagline?: string;
  title?: string;
  description: string;
  image?: string;
  color?: string;
}

export type WaitlistFormData = {
  name: string;
  phone_number: string;
  email: string;
};

// ✨ Features
export interface FeaturesProps {
  image?: string;
  title?: string;
  desc: string;
  color?: string;
}

// 💬 Testimonials
export interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

// 🎥 Video Cards
export interface VideoCard {
  badgeIcon?: string;
  badgeText: string;
  image: string;
  description: string;
  ctaText: string;
  testimonial?: {
    quote: string;
    highlight: string;
    avatar: string;
    name: string;
    role: string;
  };
}

// 🪜 Step data
export interface Step {
  tagline?: string;
  description?: string;
}

// ============================================================
// 🎠 CAROUSEL SLIDES
// ============================================================

export const carouselOne: CarouselLogo[] = [
  { src: images.cowry, alt: "Cowry" },
  { src: images.slack, alt: "Slack" },
  { src: images.inter, alt: "Intercom" },
  { src: images.whatsapp, alt: "WhatsApp" },
  { src: images.hubspot, alt: "HubSpot" },
  { src: images.tix, alt: "Tix Africa" },
];

export const carouselTwo: CarouselLogo[] = [
  { src: images.flutter, alt: "Flutter" },
  { src: images.tuya, alt: "Tuya" },
  { src: images.whatsapp, alt: "WhatsApp" },
  { src: images.airbnb, alt: "Airbnb" },
  { src: images.paystak, alt: "Paystack" },
  { src: images.bookings, alt: "Bookings" },
];

// ============================================================
// ❓ FAQ DATA
// ============================================================

export const FAQData = [
  {
    question: "What is RootsCards?",
    answer:
      "RootsCards is an AI-powered smart infrastructure for check-ins, queue management, and engagement...",
  },
  {
    question: "Who is RootsCards for?",
    answer:
      "Anyone! Individuals can showcase their work, businesses can boost engagement...",
  },
  {
    question: "How do I start?",
    answer:
      "Simply sign up, create your profile, and start sharing your links...",
  },
  {
    question: "Does RootsCards work in low-connectivity environments?",
    answer:
      "RootsCards combines software, NFC/QR/Face ID, and APIs to process arrivals...",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, you can test it before scaling with advanced features.",
  },
];

export const ShortletsFAQ = [
  {
    question: "Do I need to replace my locks?",
    answer: "No. We support code keypads...",
  },
  {
    question: "How do deposits work?",
    answer: "No. We support code keypads...",
  },
  {
    question: "Will this work with Airbnb/Booking.com?",
    answer: "No. We support code keypads...",
  },
  {
    question: "Is WhatsApp required?",
    answer: "No. We support code keypads...",
  },
];

export const SpacesFAQ = [
  { question: "Hardware? Optional (NFC).", answer: "QR/WhatsApp are enough." },
  { question: "Multiple doors?", answer: "QR/WhatsApp are enough." },
  { question: "Integrations?", answer: "QR/WhatsApp are enough." },
];

export const ShortletsWaitlist = [
  {
    question: "ID/KYC?",
    answer: "Collect IDs and key details; export if needed.",
  },
  { question: "No front desk?", answer: "QR/WhatsApp are enough." },
  { question: "Integrations?", answer: "QR/WhatsApp are enough." },
];

// ============================================================
// ⚙️ PROCESSES / WAITLIST / SCROLL
// ============================================================

export const processesCard: Processes[] = [
  {
    tagline: "Seamless",
    title: "Seamless Arrival",
    description: "Tap NFC, scan QR...",
    image: images.seamless,
    color: "#F0E99C",
  },
  {
    tagline: "Segmentation",
    title: "Behavioral Segmentation",
    description: "Group visitors by frequency...",
    image: images.behavioral,
    color: "#CED7F6",
  },
  {
    tagline: "Optimization",
    title: "Real-Time Optimization",
    description: "AI routes people...",
    image: images.optimization,
    color: "#A395B2",
  },
  {
    tagline: "Insights",
    title: "Insights That Matter",
    description: "Throughput, dwell time...",
    image: images.insights,
    color: "#CFE69B",
  },
];

export const waitlist: Processes[] = [
  {
    description: "Self-check-in (NFC/QR/WhatsApp) + fast manual fallback.",
    image: images.seamless,
  },
  {
    description: "Smart RSVPs, plus-ones, custom questions.",
    image: images.rsvp,
  },
  { description: "Live dashboard: arrivals, latecomers...", image: images.db },
  { description: "AI insights: engagement, no-shows...", image: images.ai },
  {
    description: "Webhooks & simple APIs. Optional NFC kits.",
    image: images.api,
  },
  { description: "Growth loops in product-led growth...", image: images.plg },
  {
    description: "Acquisition: public RSVP/check-in pages...",
    image: images.seamless,
  },
  { description: "Collaboration: invite teammates...", image: images.clb },
  { description: "Virality: referral link after signup...", image: images.rfl },
  { description: "Expansion: start at one door...", image: images.qr },
];

export const officesScroll: Processes[] = [
  { description: "Visitor pre-registration links + walk-in QR." },
  { description: "Badge/label options and reason-for-visit." },
  { description: "Time-on-premise, department/host mapping..." },
  { description: "Cleaner scheduling prompts on checkout." },
  { description: "Owner/manager dashboard across multiple properties." },
  { description: "Growth loops in product-led growth..." },
  { description: "Collab loop: invite HR/Facilities/Security..." },
  { description: "Expansion loop: start at HQ → clone to branches..." },
];

export const shortletsScroll: Processes[] = [
  { description: "Guest pre-arrival link (ID + details) or lobby QR." },
  { description: "Check-in timestamps, stay length, unit mapping." },
  { description: "Optional deposits/damages notes & photo attachments." },
  { description: "Cleaner scheduling prompts on checkout." },
  { description: "Owner/manager dashboard across multiple properties." },
  { description: "Growth loops in product-led growth..." },
  { description: "Guest loop: guests see your branded page..." },
  { description: "Portfolio loop: add more units/locations..." },
];

// ============================================================
// 🌟 FEATURES / PROPERTIES / SPACES
// ============================================================

export const cards: FeaturesProps[] = [
  {
    image: images.checkin,
    title: "Pre-check-in link",
    desc: "Sent 24 hours before arrival...",
  },
  {
    image: images.kyc,
    title: "KYC & deposit",
    desc: "Phone verify → selfie + ID → deposit pre-auth...",
  },
  {
    image: images.access,
    title: "Access Issued",
    desc: "Time-bound keypad code or smart-lock token...",
  },
  {
    image: images.checkout,
    title: "Checkout & Cleaning",
    desc: "Guest checks out → cleaner gets task...",
  },
];

export const properties: FeaturesProps[] = [
  {
    image: images.whatsapp,
    title: "WhatsApp self-check-in",
    desc: "OTP, selfie + ID...",
    color: "#25D366",
  },
  {
    image: images.lock,
    title: "Smart Access",
    desc: "Auto-issue/rotate codes...",
    color: "#0181D7",
  },
  {
    image: images.deposits,
    title: "Deposit & Upsells",
    desc: "Pre-authorize, release...",
    color: "#BB12C1",
  },
  {
    image: images.tasks,
    title: "Tasks & Housekeeping",
    desc: "Cleaning auto-dispatches...",
    color: "#836A32",
  },
  {
    image: images.noise,
    title: "Noise and Incidents",
    desc: "Detect parties early...",
    color: "#EB0B0E",
  },
  {
    image: images.owner,
    title: "Owner Analytics",
    desc: "Arrivals today, SLA performance...",
    color: "#F0C118",
  },
];

export const spaces: FeaturesProps[] = [
  { color: "#0181D7", image: images.whatsapp, desc: "Create your space." },
  {
    color: "#3AAD51",
    image: images.lock,
    desc: "Pick entry mode: NFC / QR / WhatsApp.",
  },
  {
    color: "#EF314C",
    image: images.owner,
    desc: "Go live — watch arrivals in real time.",
  },
  { color: "#914ACA", image: images.noise, desc: "PLG loop" },
];

export const spacesTwo: FeaturesProps[] = [
  {
    color: "#EF9931",
    image: images.tasks,
    desc: "Guests hit your public page...",
  },
  {
    color: "#6B48DC",
    image: images.deposits,
    desc: "Host loop: staff invites = priority...",
  },
  {
    color: "#858B1E",
    image: images.whatsapp,
    desc: "Attendee loop: guests hit your public page...",
  },
];

// ============================================================
// 💬 TESTIMONIALS
// ============================================================

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni repellendus, amet eaque odio voluptate facilis. Consequuntur repellendus error est facilis?",
    name: "Charles Dickens",
    role: "CTO, Accenture",
    avatar: images.avatar,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni repellendus, amet eaque odio voluptate facilis. Consequuntur repellendus error est facilis?",
    name: "Ada Lovelace",
    role: "Engineer, Microsoft",
    avatar: images.avatar,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni repellendus, amet eaque odio voluptate facilis. Consequuntur repellendus error est facilis?",
    name: "Alan Turing",
    role: "Researcher, Google DeepMind",
    avatar: images.avatar,
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni repellendus, amet eaque odio voluptate facilis. Consequuntur repellendus error est facilis?",
    name: "Grace Hopper",
    role: "Admiral, US Navy",
    avatar: images.avatar,
  },
];

// ============================================================
// 🎥 VIDEO CARD SLIDE SHOW
// ============================================================

export const videoCards: VideoCard[] = [
  {
    badgeText: "RootsCard Suite",
    image: images.videoBg,
    description: "We’re helping companies extract their data...",
    ctaText: "Book a demo",
    testimonial: {
      quote: "Rootscard helped us save $2.1M...",
      highlight: "$2.1M",
      avatar: "/avatars/sam-smith.jpg",
      name: "Sam Smith",
      role: "CTO, Microsoft",
    },
  },
  {
    badgeText: "RootsCard Suite",
    image: images.videoBg,
    description: "We’re helping companies extract their data...",
    ctaText: "Book a demo",
    testimonial: {
      quote: "We were able to increase customer satisfaction...",
      highlight: "$2.1M",
      avatar: "/avatars/sam-smith.jpg",
      name: "Sam Smith",
      role: "CTO, Microsoft",
    },
  },
];

// NAVMENU CONSTANTS
//navMenu items
export const navMenu: NavItem[] = [
  { menu: "View demo", url: "/demo" },

  {
    menu: "Products",
    submenu: [
      {
        title: "Rootscards Check-in",
        description:
          "Streamline visitor management with easy digital check-in.",
        url: "/check-in",
      },
      {
        title: "Rootscards for Events",
        description: "Seamless registration and attendee tracking for events.",
        url: "/events",
      },
      {
        title: "Rootscards for Offices",
        description: "Modernize office entries and visitor access.",
        url: "/offices",
      },
      {
        title: "Rootscards for Shortlets",
        description: "Simplify guest management for rentals and apartments.",
        url: "/shortlets",
      },
      {
        title: "Rootscards for Churches",
        description:
          "Efficient attendance and guest tracking for congregations.",
        url: "/churches",
      },
    ],
  },

  { menu: "Documentation", url: "#" },
  { menu: "Pricing", url: "/pricing" },
  { menu: "Sign In/Up", url: "https://app.rootscards.com" },
];

export const navMenu2: SimpleNavItem[] = [
  { menu: "View demo", url: "/demo" },
  { menu: "Pricing", url: "/pricing" },
  { menu: "Sign In/Up", url: "https://app.rootscards.com" },
];
