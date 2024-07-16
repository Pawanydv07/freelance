// CoursePage.jsx
import React from 'react';
import CoursePoster from './CoursePoster';
import CategoryMenu from './CategoryMenu';
import DSANavBar from './DSANavBar';
import DSAQuestionsList from './DSAQuestionsList';
import JavaScriptImage from '../assets/javascript.jpg';
import ReactImage from '../assets/react.jpg';
import HtmlImage from '../assets/HTML.jpg';
import PythonImage from '../assets/python.jpg';
import NodeJsImage from '../assets/nodejs.jpeg';
import JavaImage from '../assets/java.jpg';

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Explore Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* JavaScript Course */}
          <CoursePoster
            title="JavaScript"
            image={JavaScriptImage}
            description="Learn JavaScript, the programming language of the web, and build dynamic and interactive websites."
            link="javascript" // Match this to the route path ("/javascript" in App.jsx)
          />
          
          {/* React Course */}
          <CoursePoster
            title="React"
            image={ReactImage}
            description="Master React, a powerful JavaScript library for building user interfaces, and create modern web applications."
            link="react" // Match this to the route path ("/react" in App.jsx)
          />
          
          {/* HTML Course */}
          <CoursePoster
            title="HTML"
            image={HtmlImage}
            description="Understand the basics of HTML, the standard markup language for creating web pages, and build the structure of your websites."
            link="html" // Example: ("/html" in App.jsx)
          />
          
          {/* Python Course */}
          <CoursePoster
            title="Python"
            image={PythonImage}
            description="Learn Python, a versatile and beginner-friendly programming language, and explore its applications in web development, data analysis, and more."
            link="python" // Example: ("/python" in App.jsx)
          />
          
          {/* Node.js Course */}
          <CoursePoster
            title="Node.js"
            image={NodeJsImage}
            description="Get started with Node.js, a JavaScript runtime for building server-side applications, and learn to create scalable network applications."
            link="nodejs" // Example: ("/nodejs" in App.jsx)
          />
          
          {/* Java Course */}
          <CoursePoster
            title="Java"
            image={JavaImage}
            description="Dive into Java, a popular programming language used for building robust and high-performance applications, and gain a strong foundation in object-oriented programming."
            link="java" // Example: ("/java" in App.jsx)
          />
        </div>

        {/* Category Menu */}
        <CategoryMenu />

        {/* DSA Nav Bar */}
        <DSANavBar />

        {/* DSA Questions List */}
        <DSAQuestionsList />
      </div>
    </div>
  );
};

export default CoursePage;
