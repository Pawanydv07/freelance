import React, { useState } from 'react';

const CoursePoster = ({ title, image, description, price }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-bold">{title}</p>
        <div className={`text-white text-sm mt-2 overflow-hidden ${isExpanded ? 'h-auto' : 'h-16'}`}>
          <p>{description}</p>
        </div>
        <button
          onClick={toggleDescription}
          className="mt-2 px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isExpanded ? 'View Less' : 'View More'}
        </button>
        <p className="mt-2 text-lg font-bold text-white">${price}</p>
      </div>
    </div>
  );
};

export default CoursePoster;
