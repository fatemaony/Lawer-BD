import React from 'react';
import bannerImg from '../assets/banner-img-1.png';

function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl mx-32 mb-12">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <img 
        src={bannerImg} 
        alt="Law Office" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">
          It avoids subjective claims or exaggeration that might raise red flags legally
        </h1>
        <p className="text-md max-w-3xl">
          Our platform connects you with verified, experienced lawyers driven efficient operations — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;