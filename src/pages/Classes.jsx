import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

// Hero Section Component
const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen text-white flex items-center justify-center mt-4 relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative text-center z-10">
        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">
          Full Stack Developer Course
        </h1>
        <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Become a proficient full stack developer with our comprehensive course.
        </p>
        <button className="bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors transform hover:scale-110">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

// Course Details Component
const CourseDetails = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">Course Details</h2>
      <p className="text-xl mb-4 max-w-3xl mx-auto">
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={instructor.photo}
          alt={instructor.name}
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-full transform hover:scale-110 transition-all">
          <Link to="#">
            <FaGithub />
          </Link>
        </div>
      </div>
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
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 transition-colors duration-300 ${index % 3 === 0
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
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-center text-white">
      <h2 className="text-4xl font-bold mb-10">Class Schedule</h2>
      <div className="max-w-4xl mx-auto">
        {schedule.map((classInfo, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-lg p-6 mb-8 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold">{classInfo.topic}</h3>
            <p className="text-xl mb-4">{classInfo.duration}</p>
            <div className="text-left text-gray-800">
              <p className="font-semibold">Details:</p>
              <p className="text-gray-700">
                Learn the fundamentals of {classInfo.topic} in this{" "}
                {classInfo.duration} course.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
    <div className="font-sans bg-gradient-to-r from-indigo-700 to-purple-700">
      <HeroSection />
      <CourseDetails />
      <div className="flex flex-wrap justify-center bg-gradient-to-r from-indigo-700 to-purple-600 py-16">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </div>
      <ClassSchedule />
    </div>
  );
};

export default Classes;
