import React from 'react';
import '../css/courses.css';

const BoxGrid = () => {
  return (
    <div className="px-4 py-4 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="bg-orangered h-[150vh] flex flex-col justify-between p-4">
            <div className="flex items-center justify-center flex-grow main-courses">
              Box {index + 1}
            </div>
            <button className="bg-blue-500 text-white py-2 w-full mt-4">
              Click Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoxGrid;
