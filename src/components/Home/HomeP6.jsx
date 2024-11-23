import React, { useState } from 'react';
import '../../css/Home/HomeP6.css'; // Import the CSS file for styling
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import default2 from '../../assets/photo1.jpg';
import hover2 from '../../assets/photo2.jpg';
import backgroundImage from '../../assets/back1.jpg'; // Import the background image

const HoverImageComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    { id: 1, title: 'Project 1', defaultImage: photo1, hoverImage: photo2 },
    { id: 2, title: 'Project 2', defaultImage: default2, hoverImage: hover2 },
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-teal-500 to-indigo-600'} min-h-screen bg-cover bg-center`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 lg:px-20 text-white">
        <div className="max-w-4xl text-center mb-16">
          <h2 className="text-5xl font-extrabold text-shadow-lg leading-tight">
            Explore Our Portfolio
          </h2>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
            Discover our range of innovative projects. Hover over each image to see the transformation and get inspired.
          </p>
          <button
            onClick={toggleDarkMode}
            className="mt-8 px-8 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-xl hover:bg-teal-400 transition duration-300">
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative overflow-hidden rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
              <div className="group relative">
                <img
                  src={project.defaultImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-0"
                />
                <img
                  src={project.hoverImage}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 text-white py-2 px-4 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverImageComponent;
