import React, { useState } from "react";
import "../css/classpage.css";
import degree from "../assets/degree.png";
import badge from "../assets/badge.png";
import hero from "../assets/herosection.jpg";
import background from "../assets/28147.jpg";
import person from "../assets/64730.jpg";

// CourseInfo Component
function CourseInfo() {
  return (
    <div className="bg-white p-6 m-4 rounded-lg shadow-md flex-1">
      <h2 className="text-2xl font-bold mb-4">Paid Course</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="material-icons mr-2">book</span> Lessons: 5
        </li>
        <li className="flex items-center">
          <span className="material-icons mr-2">quiz</span> Quizzes: 2
        </li>
        <li className="flex items-center">
          <span className="material-icons mr-2">assignment</span> Assignments: 1
        </li>
      </ul>
    </div>
  );
}

// Instructor Component
function Instructor() {
  return (
    <div className="bg-white p-6 m-4 rounded-lg shadow-md w-1/3">
      <h2 className="text-2xl font-bold mb-4">Featured Instructor</h2>
      <img
        src={person}
        alt="Instructor"
        className="rounded-full mx-auto mb-4"
      />
      <p className="text-center">Instructor Name</p>
    </div>
  );
}

// Pages
function Courses() {
  return (
    <div className="flex">
      <CourseInfo />
      <Instructor />
    </div>
  );
}

function About() {
  return <div>About Page</div>;
}

function Faculty() {
  return <div>Faculty Page</div>;
}

function Info() {
  return <div>Info Page</div>;
}

// Main ClassPage Component
const ClassPage = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderContent = () => {
    switch (activeSection) {
      case "courses":
        return <Courses />;
      case "about":
        return <About />;
      case "faculty":
        return <Faculty />;
      case "info":
        return <Info />;
      default:
        return <About />;
    }
  };

  return (
    <div className="main h-full w-full">
      <div className="classhero">
        <img src={hero} alt="hero" className="img-hero" />
        <h1 className="text-white font-bold">Pawan Yadav</h1>
      </div>
      <div className="maincontent">
        <div className="classMain">
          <div className="flex main-content glass">
            <div className="featured">
              <p className="star">&#9733;</p>
              <p className="featured-text">Featured</p>
            </div>
            <div className="flex main-content-2">
              <div className="badge glass">
                <img src={badge} alt="badge" className="w-20 h-10 mt-2" />
              </div>
              <div className="badge glass">
                <img src={degree} alt="badge" className="w-20 h-10 mt-2" />
              </div>
            </div>
          </div>
          <div className="onlineclass">
            <div className="online-1">
              <h4>Online Class</h4>
            </div>
            <div className="online-2">
              <div className="dot"></div>
              <h4>Online</h4>
            </div>
          </div>
          <div className="profile">
            <div className="person">
              <img src={person} alt="person" className="person-img" />
            </div>

            <hr />
            <div className="instructor-details">
              <h3>Instructor</h3>
              <p>John Doe</p>
            </div>
            <hr />
            <div className="class-details">
              <p>Courses</p>
              <p>Introduction to Programming</p>
            </div>
            <hr />
            <div className="review-stars">
              <p>Review</p>
              <p>★★★★☆ (6)</p>
            </div>
          </div>
          <div className="fees flex">
            <div className="payment"> $ 15 </div>
            <div className="cart">
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </div>
          </div>
        </div>
      </div>
      <div className="class-content">
        <div className="main-class">
          <div className="nav-content">
            <div className="flex flex-col-1 navlinks">
            <button onClick={() => setActiveSection("about")}>About</button>
            <button onClick={() => setActiveSection("faculty")}>Faculty</button>
            <button onClick={() => setActiveSection("courses")}>Courses</button>
            <button onClick={() => setActiveSection("info")}>Info</button>
            </div>
            {renderContent()}
          </div>
          <div className="photo-class">
            <p className="feat">FEATURED </p>
            <p className="feat">INSTRUCTOR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;
