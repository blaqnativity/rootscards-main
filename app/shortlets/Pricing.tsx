"use client";

import { useState } from "react";
import { CheckIcon } from "@phosphor-icons/react";
// import { BtnOrdinary } from "@/buttons/BtnOrdinary";

interface PlanFeature {
  text: string;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  period?: string;
  highlight?: string;
  buttonText: string;
  buttonVariant?: "primary" | "secondary";
  features: PlanFeature[];
  popular?: boolean;
}

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const plans: Plan[] = [
    {
      id: "starter",
      name: "Starter",
      price: "₦0",
      period: "/month",
      highlight: "Perfect for small teams",
      buttonText: "Free trial",
      features: [
        { text: "Up to 10 stays/month" },
        { text: "WhatsApp check-in" },
        { text: "Email support" },
      ],
    },
    {
      id: "growth",
      name: "Growth",
      price: billing === "monthly" ? "₦15,000" : "₦150,000",
      period: billing === "monthly" ? "/unit/month" : "/unit/year",
      highlight: "Popular 🔥",
      buttonText: "Subscribe",
      buttonVariant: "primary",
      features: [
        { text: "Deposits & upsells" },
        { text: "Tasks & housekeeping" },
        { text: "Analytics" },
        { text: "Priority template approvals" },
      ],
      popular: true,
    },
    {
      id: "pro",
      name: "Pro",
      price: "Let’s talk",
      period: "/month",
      highlight: "For small organizations",
      buttonText: "Book a call",
      buttonVariant: "secondary",
      features: [
        { text: "50+ units" },
        { text: "API & webhooks" },
        { text: "Noise sensors" },
        { text: "Concierge workflows" },
        { text: "Priority support" },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="hThree text-center font-bold mb-2">
          Fair, flexible pricing
        </h2>
        <p className="hFive text-center text-gray-600 mb-6">
          Start free. Scale as you add units. Cancel anytime.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center">
          <div className="bg-gray-200 p-1 rounded-full flex">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billing === "monthly" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billing === "annual" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <h3 className="w-2/3 text-center mx-auto hThree font-semibold my-12">
          Hardware kits sold separately. Payment processing at cost.
        </h3>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`h-fit rounded-2xl bg-[#E6E6E6] flex flex-col`}
            >
              <div className="bg-white rounded-2xl p-2">
                <div className="bg-[#E6E6E6] p-2 rounded-2xl mb-5 flex flex-col gap-8">
                  <span className="w-fit text-xs bg-white px-2 py-1 rounded-full">
                    {plan.name}
                  </span>
                  {/* Price */}
                  <h3 className="text-2xl font-bold">
                    {plan.price}
                    <span className="text-sm font-normal text-gray-500">
                      {plan.period}
                    </span>
                  </h3>
                </div>
                {plan.highlight && (
                  <p className="text-sm pl-3 my-4">{plan.highlight}</p>
                )}
                {/* Button */}
                {/* <BtnOrdinary
                  text={plan.buttonText}
                  btnBg="bg-black"
                  textColor="text-white"
                /> */}
              </div>

              {/* Features */}
              <ul className="mt-6 pl-5 pb-5 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="mr-2 bg-black text-white p-1 rounded-full">
                      <CheckIcon />
                    </span>{" "}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
