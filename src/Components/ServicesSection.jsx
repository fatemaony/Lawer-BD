import React from 'react';
import stats from '../data/stats';
import StatCard from './StatCard';


function ServicesSection() {


  return (
    <div className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">We Provide Best Law Services</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Our platform connects you with verified, experienced lawyers across various specialties — all at your convenience.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map(stat => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;