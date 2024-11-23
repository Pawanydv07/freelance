import React from "react";
import img from "../../assets/course.jpeg";
import backgroundImage from "../../assets/white2.jpg"; // Import the background image

const HomeP4 = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(
          <span key={i} className="text-yellow-400 relative">
            ★<span className="text-gray-300 absolute top-0 left-0 overflow-hidden w-1/2">★</span>
          </span>
        );
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  const courses = [
    {
      title: "Introduction to React.js",
      description:
        "Begin your journey with React.js. This course covers the fundamentals of React, guiding you through the process of building your first React applications.",
      mode: "Online",
      rating: 4.5,
    },
    {
      title: "Advanced React Techniques",
      description:
        "Take your React skills to the next level. Learn about advanced concepts such as state management, hooks, and the Context API to build more dynamic and efficient applications.",
      mode: "Onsite",
      rating: 4.7,
    },
    {
      title: "React with TypeScript",
      description:
        "Enhance your React applications with TypeScript. This course teaches you how to integrate TypeScript with React, providing better type safety and reducing bugs.",
      mode: "Online",
      rating: 4.6,
    },
  ];

  return (
    <div
      className="courses-container bg-cover bg-center min-h-screen flex flex-col items-center py-16 px-6 md:px-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-white bg-gradient-to-r from-purple-500 to-pink-500 py-4 px-8 rounded-xl shadow-lg">
        Our Professional Classes
      </h1>

      {/* Course Cards */}
      <div className="courses grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-7xl">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-box relative group bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg shadow-lg p-6 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Course Label */}
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs uppercase font-bold px-3 py-1 rounded">
              {course.mode}
            </div>

            {/* Course Image */}
            <img
              src={img}
              alt={course.title}
              className="w-full h-40 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
            />

            {/* Course Content */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900">{course.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{course.description}</p>
              <div className="flex items-center justify-center mt-4">
                <span className="text-lg font-bold text-gray-700 mr-2">{course.rating.toFixed(1)}</span>
                <div className="stars flex">{renderStars(course.rating)}</div>
              </div>
            </div>

            {/* Hover Details */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeP4;
