import React from 'react';
import logo from '../assets/logo.png'; // You'll need to add this logo asset
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Law.BD Logo" className="h-8 w-auto mr-2" />
          <span className="text-green-600 font-bold text-xl">Law.BD</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/my-bookings" className="text-gray-700 hover:text-green-600">My Bookings</Link>
          <Link to="/blogs" className="text-gray-700 hover:text-green-600">Blogs</Link>
          <Link to="/contact-us" className="text-gray-700 hover:text-green-600">Contact Us</Link>
        </div>
        
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full">
          Contact Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;