import { StepsHeader } from "./StepsHeader";
import { StepsVideoPlayer } from "./StepsVideoPlayer";
import { StepCard } from "./StepCard";
import checkIn from "@/public/check-in.svg";
import checkout from "@/public/checkout.svg";
import kyc from "@/public/kyc.svg";
import access from "@/public/access.svg";

// --- ASSET DEFINITIONS ---
const ASSETS = {
  image1: {
    alt: "Step 1: Pre-check-in link",
  },
  image2: {
    alt: "Step 2: KYC & deposit",
  },
  image3: {
    src: { checkIn },
    alt: "Step 3: Access Issued",
  },
  image4: {
    src: { checkIn },
    alt: "Step 4: Checkout & Cleaning",
  },
};

// --- DATA STRUCTURE ---
const stepsData = [
  {
    title: "Pre-check-in link",
    desc: "Sent 24 hours before arrival via WhatsApp/SMS to ensure a smooth check-in experience.",
    image: checkIn,
  },
  {
    title: "KYC & deposit",
    desc: "Phone verify → selfie → ID → deposit pre-auth. Done in under two minutes.",
    image: kyc,
  },
  {
    title: "Access Issued",
    desc: "Time-bound keypad code or smart-lock token released at check-in time.",
    image: access,
  },
  {
    title: "Checkout & Cleaning",
    desc: "Guest checks out → cleaner gets task → photo proof → deposit released/adjusted → receipt.",
    image: checkout,
  },
];

export const Steps = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-10 md:py-20">
        {/* Top section (Header and Video) */}
        <section className="grid gap-10 md:gap-15">
          <StepsHeader />
          <StepsVideoPlayer />
        </section>

        {/* Steps cards section */}
        <section className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((card, index) => (
            <StepCard
              key={index}
              image={card.image}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
