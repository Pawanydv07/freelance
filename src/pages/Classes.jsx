import React from "react";
import { Link } from "react-router-dom";

// Hero Section Component
const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen text-white flex items-center justify-center mt-4"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c)",
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Full Stack Developer Course</h1>
        <p className="text-xl mb-6">
          Become a proficient full stack developer with our comprehensive
          course.
        </p>
        <button className="bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

// Course Details Component
const CourseDetails = () => {
  return (
    <div className="py-16 bg-gray-100 text-center bg-gradient-custom">
      <h2 className="text-4xl font-bold mb-6">Course Details</h2>
      <p className="text-xl mb-4 text-white">
        Our Full Stack Developer course covers both front-end and back-end
        development, including technologies like HTML, CSS, JavaScript, React &
        Redux, Node.js, MongoDB & Express, and more. Gain hands-on experience
        with real-world projects and learn from industry experts.
      </p>
    </div>
  );
};

// Instructor Card Component
const InstructorCard = ({ instructor }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105 bg-customLight">
      <img
        className="w-full h-48 object-cover"
        src={instructor.photo}
        alt={instructor.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-slate-950">
          {instructor.name}
        </div>
        <div className="text-sm font-semibold text-gray-600 mb-2">
          {instructor.expertise}
        </div>
        <p className="text-gray-700 text-base text-slate-700">
          {instructor.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-gray-100 rounded-b-lg">
        {instructor.courses.map((course, index) => (
          <span
            key={index}
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 transition-colors duration-300 ${
              index % 3 === 0
                ? "bg-orange-200 hover:bg-orange-300"
                : index % 3 === 1
                ? "bg-teal-200 hover:bg-teal-300"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {course}
          </span>
        ))}
      </div>
    </div>
  );
};

// Class Schedule Component
const ClassSchedule = () => {
  const schedule = [
    { duration: "10 days", topic: "HTML & CSS Basics" },
    { duration: "1 month", topic: "JavaScript Fundamentals" },
    { duration: "2 months", topic: "React & Redux" },
    { duration: "1.5 months", topic: "Node.js Fundamentals" },
    { duration: "1.5 months", topic: "MongoDB & Express" },
    // Add more classes as needed
  ];

  // Sample plans for each class
  const classPlans = [
    {
      topic: "HTML & CSS Basics",
      details: "Learn foundational concepts of HTML and CSS, including layout, styling, and responsive design principles.",
      instructor: "Rajesh Singh",
    },
    {
      topic: "JavaScript Fundamentals",
      details: "Explore core JavaScript concepts, including variables, data types, functions, and control flow.",
      instructor: "Arjun Patel",
    },
    {
      topic: "React & Redux",
      details: "Master React library for building user interfaces and Redux for managing application state.",
      instructor: "Arjun Patel",
    },
    {
      topic: "Node.js Fundamentals",
      details: "Learn server-side JavaScript using Node.js, including asynchronous programming and building RESTful APIs.",
      instructor: "Priya Sharma",
    },
    {
      topic: "MongoDB & Express",
      details: "Explore MongoDB for database management and Express for building web applications.",
      instructor: "Sneha Rao",
    },
    // Add more plans as needed
  ];

  return (
    <div className="py-16 bg-gradient-custom text-center text-white">
      <h2 className="text-4xl font-bold mb-10">Class Schedule</h2>
      <div className="max-w-4xl mx-auto">
        {schedule.map((classInfo, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-lg p-6 mb-8 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold">{classInfo.topic}</h3>
            <p className="text-xl mb-4">{classInfo.duration}</p>
            {/* Display corresponding class plan */}
            {classPlans.map((plan, idx) =>
              plan.topic === classInfo.topic ? (
                <div key={idx} className="mt-4 text-left">
                  <p className="font-semibold">Details:</p>
                  <p className="text-gray-700">{plan.details}</p>
                  <p className="font-semibold mt-2">Instructor: {plan.instructor}</p>
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Footer Component
// const Footer = () => {
//   return (
//     <div className="bg-gray-800 text-white py-6 text-center">
//       <p>&copy; 2024 Logical Sir. All rights reserved.</p>
//       <div className="mt-4">
//         <Link to="/contact" className="text-blue-400 mx-2">
//           Contact Us
//         </Link>
//         <Link to="/privacy" className="text-blue-400 mx-2">
//           Privacy Policy
//         </Link>
//         <Link to="/terms" className="text-blue-400 mx-2">
//           Terms of Service
//         </Link>
//       </div>
//     </div>
//   );
// };

// Sample Instructors Data
const instructors = [
  {
    name: "Arjun Patel",
    photo:
      "https://st.depositphotos.com/1037987/2755/i/450/depositphotos_27552961-stock-photo-portrait-of-teacher-in-classroom.jpg",
    expertise: "JavaScript Expert",
    courses: ["JavaScript", "React & Redux", "Node.js"],
    description: "Expert in JavaScript and web development.",
  },
  {
    name: "Sneha Rao",
    photo:
      "https://cdn.elearningindustry.com/wp-content/uploads/2019/10/professional-development-tools-for-teachers.jpg",
    expertise: "Data Science Specialist",
    courses: ["MongoDB & Express", "Data Science"],
    description: "Specializes in MongoDB and data science.",
  },
  {
    name: "Rajesh Singh",
    photo:
      "https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939004_sjTrDd3oRdZsyE9XCWmc3MT0GR28OiS6.jpg",
    expertise: "Frontend Developer",
    courses: ["HTML & CSS", "JavaScript"],
    description: "Focused on creating responsive and dynamic web interfaces.",
  },
  {
    name: "Priya Sharma",
    photo:
      "https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1709/bbtreesubmission170916424/87540426-asian-female-teacher-teaching-a-class.jpg",
    expertise: "Backend Developer",
    courses: ["Node.js", "Express"],
    description:
      "Experienced in server-side development and database management.",
  },
];

// Main Classes Component
const Classes = () => {
  return (
    <div className="font-sans bg-gradient-custom">
      <HeroSection />
      <CourseDetails />
      <div className="flex flex-wrap justify-center bg-gradient-custom py-16">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </div>
      <ClassSchedule />
      {/* <Footer /> */}
    </div>
  );
};

export default Classes;
