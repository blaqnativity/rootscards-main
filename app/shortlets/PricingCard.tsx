import React from "react";

/**
 * Renders an individual pricing card.
 * @param {object} props
 * @param {object} props.plan - The pricing plan data.
 * @param {string} props.currentPrice - The price string based on the selected period.
 */
export const PricingCard = ({ plan, currentPrice }) => {
  return (
    <div
      className={`flex flex-col h-full rounded-3xl p-6 md:p-8 transition-all duration-300
        ${plan.cardBg} ${
        plan.isPopular ? "border-2 border-indigo-400" : "border border-gray-200"
      }`}
    >
      {/* Tier Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1 flex justify-between items-center">
          {plan.tier}
          {plan.isPopular && (
            <span className="text-sm font-bold text-orange-500 bg-white px-3 py-1 rounded-full">
              Popular 🔥
            </span>
          )}
        </h3>

        {/* Price Display */}
        <div className="text-4xl font-extrabold text-black mt-2">
          {plan.monthlyPrice !== "Let's talk" ? (
            <>
              <span className="text-3xl">₦</span>
              {currentPrice}
              <span className="text-lg font-normal text-gray-700 ml-1">
                {plan.unit}
              </span>
            </>
          ) : (
            <span className="text-3xl">{currentPrice}</span>
          )}
        </div>
        <p
          className={`text-sm mt-1 ${
            plan.tier !== "Pro" ? "text-gray-600" : "text-gray-700 font-medium"
          }`}
        >
          {plan.description}
        </p>
      </div>

      {/* CTA Button */}
      <button
        className={`w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:opacity-90 mt-auto`}
        style={{ backgroundColor: plan.buttonBg }}
      >
        {plan.buttonText}
      </button>

      {/* Feature List */}
      <ul className="mt-8 space-y-3">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start text-sm md:text-base text-gray-800"
          >
            <svg
              className="w-5 h-5 mr-2 mt-0.5 text-black flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
