"use client";

import { useApartment } from "@/context/ApartmentContext";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

const Policy = () => {
  const apartment = useApartment();

  // Format price helper
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-4">
      <h2 className="hFour font-semibold text-[#0F172A]">Apartment Policy</h2>

      <div className="space-y-4 text-[#666666]">
        {/* Check-in/Check-out */}
        <div className="flex items-start gap-3">
          <CheckCircle
            size={24}
            weight="fill"
            className="text-green-600 flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="font-medium text-gray-800">Check-in: After 2:00 PM</p>
            <p className="text-sm">Check-out: Before 11:00 AM</p>
          </div>
        </div>

        {/* Caution Fee */}
        {apartment.caution_fee > 0 && (
          <div className="flex items-start gap-3">
            <CheckCircle
              size={24}
              weight="fill"
              className="text-green-600 flex-shrink-0 mt-0.5"
            />
            <div>
              <p className="font-medium text-gray-800">Caution Fee</p>
              <p className="text-sm">
                Refundable deposit of {formatPrice(apartment.caution_fee)}{" "}
                required
              </p>
            </div>
          </div>
        )}

        {/* Max Guests */}
        <div className="flex items-start gap-3">
          <CheckCircle
            size={24}
            weight="fill"
            className="text-green-600 flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="font-medium text-gray-800">Maximum Occupancy</p>
            <p className="text-sm">
              Up to {apartment.guests_max} guests allowed
            </p>
          </div>
        </div>

        {/* No Smoking */}
        <div className="flex items-start gap-3">
          <XCircle
            size={24}
            weight="fill"
            className="text-red-600 flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="font-medium text-gray-800">No Smoking</p>
            <p className="text-sm">
              Smoking is not permitted inside the apartment
            </p>
          </div>
        </div>

        {/* No Pets */}
        <div className="flex items-start gap-3">
          <XCircle
            size={24}
            weight="fill"
            className="text-red-600 flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="font-medium text-gray-800">No Pets</p>
            <p className="text-sm">Pets are not allowed in the apartment</p>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="flex items-start gap-3">
          <CheckCircle
            size={24}
            weight="fill"
            className="text-green-600 flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="font-medium text-gray-800">Cancellation Policy</p>
            <p className="text-sm">
              Free cancellation up to 48 hours before check-in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
