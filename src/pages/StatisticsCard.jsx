import React from 'react';

const StatisticsCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <h3 className="text-xl font-bold">632/3203</h3>
      <p className="text-gray-500">Solved</p>
      <div className="flex items-center justify-center mt-4">
        <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
          <p className="text-red-500">Hard</p>
        </div>
        <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-2">
          <p className="text-yellow-500">Medium</p>
        </div>
        <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
          <p className="text-green-500">Easy</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-500">Badges: 18</p>
        <div className="flex space-x-2 mt-2">
          <span className="bg-yellow-500 text-white px-2 py-1 rounded-lg">50 Days Badge 2023</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">...</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
