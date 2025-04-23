import React, { useState } from "react";
import LawyerCard from "./LawyerCard";
import lawyers from "../data/lawyers";

function LawyersSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowAll = () => {
    setVisibleCount(lawyers.length);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Best Lawyers
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Our platform connects you with verified, experienced lawyers across
            various specialties — all at your convenience. Whether it's a routine
            legal consultation or an urgent issue, book appointments in minutes and
            receive the legal support you can trust.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {lawyers.slice(0, visibleCount).map((lawyer, index) => (
            <LawyerCard key={index} lawyer={lawyer} />
          ))}
        </div>

        {visibleCount < lawyers.length && (
          <div className="flex justify-center">
            <button
              onClick={handleShowAll}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 text-sm sm:text-base"
            >
              Show All Lawyers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LawyersSection;