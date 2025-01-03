import React from 'react';
import whiteBg from "../assets/white-image.jpg"; // Replace with your actual image path

const colors = [
  { bg: 'bg-orange-200', text: 'text-orange-700', hoverBg: 'hover:bg-orange-300' },
  { bg: 'bg-teal-200', text: 'text-teal-700', hoverBg: 'hover:bg-teal-300' },
  { bg: 'bg-gray-200', text: 'text-gray-700', hoverBg: 'hover:bg-gray-300' },
];

const InstructorCard = ({ instructor }) => {
  return (
    <div
      className="rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-customLight bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 w-full"
    >
      <img className="w-full h-48 object-cover" src={instructor.photo} alt={instructor.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{instructor.name}</div>
        <div className="text-sm font-semibold text-gray-600 mb-2">{instructor.expertise}</div>
        <p className="text-white text-base text-slate-700">
          {instructor.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-gray-100 bg-opacity-50 rounded-b-lg">
        {instructor.courses.map((course, index) => {
          const color = colors[index % colors.length];
          return (
            <span
              key={index}
              className={`inline-block ${color.bg} rounded-full px-3 py-1 text-sm font-semibold ${color.text} mr-2 mb-2 transition-colors duration-300 ${color.hoverBg}`}
            >
              {course}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default InstructorCard;
