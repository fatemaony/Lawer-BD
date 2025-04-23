import React, { useState } from "react";
import LawyerCard from "./LawyerCard";
import lawyers from "../data/lawyers"; // make sure this filename is correct

function LawyersSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowAll = () => {
    setVisibleCount(lawyers.length);
  };

  return (
    <div className="px-6 md:px-12 lg:px-32 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Best Lawyers</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Our platform connects you with verified, experienced lawyers across
        various specialties — all at your convenience. Whether it's a routine
        legal consultation or an urgent issue, book appointments in minutes and
        receive the legal support you can trust.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {lawyers.slice(0, visibleCount).map((lawyer, index) => (
          <LawyerCard key={index} lawyer={lawyer} />
        ))}
      </div>

      {visibleCount < lawyers.length && (
        <div className="flex justify-center">
          <button
            onClick={handleShowAll}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full"
          >
            Show All Lawyers
          </button>
        </div>
      )}
    </div>
  );
}

export default LawyersSection;
