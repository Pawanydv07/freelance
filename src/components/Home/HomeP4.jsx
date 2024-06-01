import React from 'react';
import "../../css/Home/HomeP4.css";
import img from '../../assets/course.jpeg';

const HomeP4 = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<span key={i} className="star half-filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="courses-container">
      {/* <h1 className="heading">
        <span className="first-part">Our</span><br />
        <span className="second-part">Professional</span><br />
        <span className="third-part">Classes</span>
      </h1> */}
      
      <div className="courses">
        {[
          { title: "Introduction to React.js", description: "Begin your journey with React.js. This course covers the fundamentals of React, guiding you through the process of building your first React applications.", mode: "Online", rating: 4.5 },
          { title: "Advanced React Techniques", description: "Take your React skills to the next level. Learn about advanced concepts such as state management, hooks, and the Context API to build more dynamic and efficient applications.", mode: "Onsite", rating: 4.7 },
          { title: "React with TypeScript", description: "Enhance your React applications with TypeScript. This course teaches you how to integrate TypeScript with React, providing better type safety and reducing bugs.", mode: "Online", rating: 4.6 }
        ].map((course, index) => (
          <div className="course-box" key={index}>
            <div className="course-label">{course.mode}</div>
            <img src={img} alt={course.title} className="image" />
            <div className="course-content">
              <h2 className='title-react'>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-rating">
                <div className="rating-number">{course.rating.toFixed(1)}</div>
                <div className="stars">{renderStars(course.rating)}</div>
              </div>
            </div>
            <div className="course-hover">
              <button className="details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeP4;
