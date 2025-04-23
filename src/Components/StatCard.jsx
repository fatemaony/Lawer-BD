import React, { useRef } from 'react';
import { useCountUp } from 'react-countup';

function StatCard({ stat }) {
  const countRef = useRef(null);

  useCountUp({
    ref: countRef,
    end: stat.count,
    suffix: '+',
    duration: 2,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    scrollSpyDelay: 100,
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <div className="flex justify-center mb-3">
        <img src={stat.icon} alt={stat.label} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800">
        <span ref={countRef} />
      </h3>
      <p className="text-gray-600 text-sm">{stat.label}</p>
    </div>
  );
}

export default StatCard;
