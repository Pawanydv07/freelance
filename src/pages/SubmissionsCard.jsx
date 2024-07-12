import React from 'react';

const SubmissionsCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-xl font-bold">223 submissions in the past one year</h3>
      <div className="mt-4">
        {/* Replace with actual heatmap component */}
        <div className="grid grid-cols-12 gap-1">
          {/* Dummy squares representing the heatmap */}
          {Array(12 * 6).fill(0).map((_, idx) => (
            <div key={idx} className="w-4 h-4 bg-green-500 rounded"></div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Recent AC</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">List</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Solutions</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Discuss</button>
      </div>
    </div>
  );
};

export default SubmissionsCard;
