"use client";

export const PricingToggle = ({ period, setPeriod }) => {
  const isMonthly = period === "monthly";

  const commonClasses =
    "px-6 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer text-sm md:text-base";
  const activeClasses = "bg-white text-black";
  const inactiveClasses = "text-gray-600 hover:bg-gray-50";

  return (
    <div className="inline-flex bg-gray-200 gap-1 p-1.5 rounded-full">
      <button
        onClick={() => setPeriod("monthly")}
        className={`${commonClasses} ${
          isMonthly ? activeClasses : inactiveClasses
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setPeriod("annual")}
        className={`${commonClasses} ${
          !isMonthly ? activeClasses : inactiveClasses
        }`}
      >
        Annual
      </button>
    </div>
  );
};
