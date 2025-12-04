"use client";

import { useState } from "react";
import { PricingCard } from "./PricingCard";
import { PricingToggle } from "./PricingToggle";

// --- 3. Main Pricing Section Component ---
const pricingPlans = [
  {
    tier: "Starter",
    monthlyPrice: "0",
    annualPrice: "0",
    unit: "/month",
    description: "Perfect for small teams",
    isPopular: false,
    cardBg: "bg-gray-100",
    buttonText: "Free trial",
    buttonBg: "#1e1e1e",
    features: ["Up to 10 stays/month", "WhatsApp check-in", "Email support"],
  },
  {
    tier: "Growth",
    monthlyPrice: "15,000",
    annualPrice: "150,000", // Assuming 2 months free for annual
    unit: "/unit/month",
    description: "Popular 🔥",
    isPopular: true,
    cardBg: "bg-indigo-100/50",
    buttonText: "Subscribe",
    buttonBg: "#1e1e1e",
    features: [
      "Deposits & upsells",
      "Tasks & housekeeping",
      "Analytics",
      "Priority template approvals",
    ],
  },
  {
    tier: "Pro",
    monthlyPrice: "Let's talk",
    annualPrice: "Let's talk",
    unit: "/month",
    description: "For large organizations",
    isPopular: false,
    cardBg: "bg-gray-100",
    buttonText: "Book a call",
    buttonBg: "#1e1e1e",
    features: [
      "50+ units",
      "API & webhooks",
      "Noise sensors",
      "Concierge workflows",
      "Priority support",
    ],
  },
];

export const PricingSection = () => {
  // State for toggling between monthly and annual pricing
  const [period, setPeriod] = useState("monthly"); // 'monthly' or 'annual'

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-20 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Fair, flexible pricing
          </h1>
          <p className="text-lg text-gray-500 mt-3 max-w-xl mx-auto">
            Start free. Scale as you add units. Cancel anytime.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <PricingToggle period={period} setPeriod={setPeriod} />
        </div>

        {/* Disclaimer */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-1">
            Hardware kits sold separately.
          </h2>
          <p className="text-lg text-gray-600">Payment processing at cost.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const currentPrice =
              period === "monthly" ? plan.monthlyPrice : plan.annualPrice;

            return (
              <PricingCard
                key={index}
                plan={plan}
                currentPrice={currentPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
