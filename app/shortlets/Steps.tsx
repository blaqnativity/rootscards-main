import { StepsHeader } from "./StepsHeader";
import { StepsVideoPlayer } from "./StepsVideoPlayer";
import { StepCard } from "./StepCard";

// --- PLACEHOLDER ASSET DEFINITIONS ---
const ASSETS = {
  image1: {
    src: "https://via.placeholder.com/600x400.png?text=Pre-Check-in+Link",
    alt: "Step 1: Pre-check-in link",
    width: 600,
    height: 400,
  },
  image2: {
    src: "https://via.placeholder.com/600x400.png?text=KYC+%26+Deposit",
    alt: "Step 2: KYC & deposit",
    width: 600,
    height: 400,
  },
  image3: {
    src: "https://via.placeholder.com/600x400.png?text=Access+Issued",
    alt: "Step 3: Access Issued",
    width: 600,
    height: 400,
  },
  image4: {
    src: "https://via.placeholder.com/600x400.png?text=Checkout+%26+Cleaning",
    alt: "Step 4: Checkout & Cleaning",
    width: 600,
    height: 400,
  },
};

// --- DATA STRUCTURE ---
const stepsData = [
  {
    title: "Pre-check-in link",
    desc: "Sent 24 hours before arrival via WhatsApp/SMS to ensure a smooth check-in experience.",
    image: ASSETS.image1,
  },
  {
    title: "KYC & deposit",
    desc: "Phone verify → selfie → ID → deposit pre-auth. Done in under two minutes.",
    image: ASSETS.image2,
  },
  {
    title: "Access Issued",
    desc: "Time-bound keypad code or smart-lock token released at check-in time.",
    image: ASSETS.image3,
  },
  {
    title: "Checkout & Cleaning",
    desc: "Guest checks out → cleaner gets task → photo proof → deposit released/adjusted → receipt.",
    image: ASSETS.image4,
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
