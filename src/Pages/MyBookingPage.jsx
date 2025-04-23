import React, { useState } from "react";
import { SquareX } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const MyBookingPage = () => {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  const handleCancelAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
    toast.error("Appointment cancelled successfully!");
  };

  return (
    <div className="px-32 py-12">
      {appointments.length > 0 && (
        <div className="w-full h-72 mb-12 border-1 border-gray-300 rounded-xl p-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={appointments}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                dataKey="lawyerName"
                tick={{ fontSize: 12 }}
                interval={0}
                axisLine={true}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                axisLine={true}
                tickLine={true}
                domain={[0, "dataMax + 200"]} // Auto adjust with some padding
              />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  borderRadius: "6px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [`$${value}`, "Consultation Fee"]}
                labelFormatter={(label) => `Lawyer: ${label}`}
              />
              <Bar
                dataKey="fee"
                name="Consultation Fee"
                fill="#4f46e5"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <h1 className="text-3xl font-bold text-center mb-2">
        My Today Appointments
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Our platform connects you with verified, experienced lawyers across
        various specialties — all at your convenience.
      </p>
      {appointments.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12 bg-gray-200 border-gray-400 border-1 rounded-xl p-16 w-fit mx-auto">
          <SquareX size={60} />
          <h1 className="text-3xl font-bold text-gray-800">
            No Appointments Found
          </h1>
          <p className="text-gray-600">
            You have not booked any appointments yet.
          </p>
          <strong className="mt-2 text-gray-600">
            Please go back to the home page and book an appointment.
          </strong>
          <Link to={"/"}>
            <button className="bg-black text-white rounded-2xl p-2 px-4 mt-6">
              Home
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6 px-20">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-sm flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {appointment.lawyerName}
                </h2>
                <p className="text-gray-600">{appointment.specialty}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">
                  Appointment Fee: {appointment.fee} $
                </p>
                <button
                  className="mt-2 text-red-500 border border-red-500 px-4 py-2 rounded-full hover:bg-red-100"
                  onClick={() => handleCancelAppointment(index)}
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingPage;
