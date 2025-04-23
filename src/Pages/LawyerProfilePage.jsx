import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import lawyers from "../data/lawyers";
import { Pen } from "lucide-react";
import Loding from "../Components/Loding";
import { toast } from "react-toastify";

const LawyerProfilePage = () => {
  const { lawyerId } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const lawyerData = lawyers.find(
      (lawyer) => lawyer.id === parseInt(lawyerId)
    );
    if (lawyerData) {
      setLawyer(lawyerData);
    }

    if (!lawyerData) {
      navigate("/no-lawyer-found");
      return; // Add this to prevent further rendering
    }
  }, [lawyerId, navigate]);

  if (!lawyer) {
      return (
        <Loding />
      );
  }




  const handleAppointmentBooking = () => {
    const newAppointment = {
      lawyerId: lawyer.id,
      lawyerName: lawyer.name,
      specialty: lawyer.expertise,
      fee: lawyer.consultationFee,
      bookedAt: new Date().toISOString(),
    };
  
    // Get existing appointments from localStorage
    const existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  
    // Add new one
    existingAppointments.push(newAppointment);
  
    // Save back to localStorage
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));
  
    toast.success("Appointment booked successfully!");
    navigate("/my-bookings");
  };
  

  return (
    <div className="lawyer-profile-page p-6 ">
      <div className="profile-header text-center mb-8 bg-gray-100 p-8 rounded-xl border-1 border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800">
          Lawyer’s Profile Details
        </h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className="profile-details bg-white border-1 border-gray-200 rounded-xl p-6 mb-8">
        <div className="profile-card flex items-center">
          <img
            src={lawyer.image}
            className="w-40 h-40 bg-gray-300 rounded-xl mr-6 object-cover "
            alt={lawyer.name}
          />
          <div className="profile-info">
            <span className="experience-badge bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
              {lawyer.experience}+ Years Experience
            </span>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              {lawyer.name}
            </h2>
            <div className="flex gap-12 items-center mt-1">
              <p className="text-gray-600 text-xs">{lawyer.expertise}</p>
              <div className="flex items-center gap-1">
                <Pen size={12} />{" "}
                <p className="text-gray-600 text-xs">
                  License No: {lawyer.licenseNo}
                </p>
              </div>
            </div>

            <div className="text-gray-800 font-semibold mt-2">
              <strong>Availability:</strong>{" "}
              {lawyer.availabilityDays.map((day) => (
                <span
                  key={day}
                  className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full mr-2"
                >
                  {day}
                </span>
              ))}
            </div>
            <p className="text-gray-800 font-semibold mt-2">
              <strong>Consultation Fee:</strong> {lawyer.consultationFee}$
            </p>
          </div>
        </div>
      </div>
      <div className="appointment-section bg-white border-1 border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Book an Appointment
        </h2>
        <hr className=" border-dashed border-gray-300 my-2" />
        <div className="availability-status mb-4">
          <div className="flex justify-between items-center">
            <strong className="text-xl">Availability</strong>
            <span className="availability-indicator text-green-800  bg-green-100 rounded-full px-4 py-2 font-semibold">
              Lawyer Available Today
            </span>
          </div>
          <hr className=" border-dashed border-gray-300 my-2" />
          <p className="bg-yellow-100 rounded-full px-4 py-2 text-center text-yellow-600 text-sm mb-2">
            ⚠️ Due to high patient volume, we are currently accepting
            appointments for today only. We appreciate your understanding and
            cooperation.
          </p>
        </div>
        <button className="w-full rounded-full book-appointment-button bg-green-600 text-white font-bold py-2 px-4 rd hover:bg-green-700"
          onClick={handleAppointmentBooking}>
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default LawyerProfilePage;
