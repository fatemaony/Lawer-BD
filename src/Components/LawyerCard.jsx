import React from "react";
import { Pen } from "lucide-react";
import laywerImage from "../assets/lawyer.png"; // Placeholder image
import { Link } from "react-router-dom";

function LawyerCard({ lawyer }) {

  return (
    <div className="border-1 border-gray-300 rounded-lg p-4 flex items-start space-x-4">
      <img
        src={laywerImage}
        alt={lawyer.name}
        className="w-36 h-36 object-cover rounded-lg bg-gray-200"
      />
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="bg-green-100 text-green-800 text-xs px-4 py-1 rounded-full">
            Available
          </span>
          <span className="bg-blue-100 rounded-full text-xs text-blue-800 px-4 py-1">
            {lawyer.experience}
          </span>
        </div>
        <h3 className="font-bold text-lg">{lawyer.name}</h3>
        <p className="text-gray-600 text-sm">{lawyer.expertise}</p>
        <p className="text-gray-500 text-xs flex items-center mt-1">
          <Pen className="w-4 h-4 mr-1" />
          License No: {lawyer.licenseNo}
        </p>
        <div className="mt-2">
          <Link to={`/lawyer/${lawyer.id}`}>
            <button className="w-full border-2 border-blue-200 rounded-full p-1 text-blue-600 hover:text-white hover:bg-blue-600 hover:border-hidden transition-[.3s] text-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LawyerCard;
