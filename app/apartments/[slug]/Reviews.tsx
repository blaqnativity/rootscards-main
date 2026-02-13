"use client";

import Image from "next/image";
import { Star } from "@phosphor-icons/react";

// Mock reviews - you can later fetch from API
const Reviews = () => {
  const reviews = [
    {
      avatarUrl: "/avatars/avatar1.png",
      user: "Sam Larry",
      message:
        "Amazing place! Very clean and modern. The host was super responsive and helpful. Highly recommend!",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      avatarUrl: "/avatars/avatar2.png",
      user: "Janet Doe",
      message:
        "Great location and beautiful apartment. Everything was as described. Would definitely stay again.",
      rating: 4,
      date: "1 month ago",
    },
    {
      avatarUrl: "/avatars/avatar3.png",
      user: "Randy Orton",
      message:
        "Loved the amenities, especially the pool and workspace. Perfect for a short stay in Lagos.",
      rating: 5,
      date: "1 month ago",
    },
  ];

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            weight={star <= rating ? "fill" : "regular"}
            className={star <= rating ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="hFour font-semibold">Reviews</h2>
        <span className="text-sm text-gray-500">{reviews.length} reviews</span>
      </div>

      <div className="space-y-6">
        {reviews.map((review, id) => (
          <div
            key={id}
            className="border p-4 rounded-2xl grid grid-cols-[50px_1fr] gap-4"
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-600">
                {review.user.charAt(0)}
              </span>
            </div>

            {/* Review Content */}
            <div className="space-y-3">
              {/* User & Date */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[#0F172A]">{review.user}</h3>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>

              {/* Rating */}
              {renderStars(review.rating)}

              {/* Message */}
              <p className="text-[#666666] text-sm leading-relaxed">
                {review.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
