import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logoFooter from '../assets/logo-footer.png'; // Replace with your logo path

const Footer = () => {
    return (
        <div className="bg-black text-white py-16 mt-10">
            <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                    <img
                        src={logoFooter}
                        alt="Logo"
                        className="mr-2"
                    />
                    <h1 className="text-xl font-bold">Law.BD</h1>
                </div>
                <ul className="flex justify-center space-x-6 my-4">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">My-Bookings</li>
                    <li className="hover:underline cursor-pointer">Blogs</li>
                    <li className="hover:underline cursor-pointer">Contact Us</li>
                </ul>
                <hr className="border-dashed border-gray-500 my-4 w-1/2 mx-auto" />
                <div className="flex justify-center space-x-6">
                    <FaFacebook className="text-blue-500 cursor-pointer" size={24} />
                    <FaLinkedin className="text-blue-700 cursor-pointer" size={24} />
                    <FaYoutube className="text-red-600 cursor-pointer" size={24} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
