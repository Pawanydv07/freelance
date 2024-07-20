import React from 'react';
import "../../css/Home/HomeP4.css";
import img from '../../assets/course.jpeg';
import backgroundImage from "../../assets/white2.jpg"; // Import the background image

const HomeP4 = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(
          <span key={i} className="text-yellow-500 relative">
            ★<span className="text-gray-300 absolute top-0 left-0 overflow-hidden w-1/2">★</span>
          </span>
        );
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="courses-container main bg-cover bg-center min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="component-heading w-1/2 h-20 bg-slate-900 bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl mt-4 text-white text-4xl flex items-center justify-center border-t-2 border-orange-400 tilting-title">
        <span>Our Professional Classes</span>
      </h1>
      <div className="courses flex flex-wrap justify-around mt-8">
        {[
          { title: "Introduction to React.js", description: "Begin your journey with React.js. This course covers the fundamentals of React, guiding you through the process of building your first React applications.", mode: "Online", rating: 4.5 },
          { title: "Advanced React Techniques", description: "Take your React skills to the next level. Learn about advanced concepts such as state management, hooks, and the Context API to build more dynamic and efficient applications.", mode: "Onsite", rating: 4.7 },
          { title: "React with TypeScript", description: "Enhance your React applications with TypeScript. This course teaches you how to integrate TypeScript with React, providing better type safety and reducing bugs.", mode: "Online", rating: 4.6 }
        ].map((course, index) => (
          <div className="course-box relative bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg m-4 p-6 w-80 shadow-lg backdrop-filter backdrop-blur-lg" key={index}>
            <div className="course-label absolute top-2 left-2 bg-red-400 text-white py-1 px-3 rounded text-sm">{course.mode}</div>
            <img src={img} alt={course.title} className="w-full rounded-t-lg" />
            <div className="course-content p-4">
              <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <div className="course-rating flex items-center mt-4">
                <div className="rating-number text-gray-800 mr-2">{course.rating.toFixed(1)}</div>
                <div className="stars flex">{renderStars(course.rating)}</div>
              </div>
            </div>
            <div className="course-hover absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center py-2 transform translate-y-full transition-transform duration-300 ease-in-out">
              <button className="details-button bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeP4;
