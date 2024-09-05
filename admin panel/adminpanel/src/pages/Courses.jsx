import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "AP Calculus AB",
    lessons: 84,
    duration: "21 hrs 7 mins 42 secs",
    price: "₹14,999",
    days: 31,
    bgColor: "bg-indigo-900",
    textColor: "text-white",
    imageUrl:
      "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/170997/courses/203244/172366356818810_lyst1723663568217.png", // No image for placeholder
  },
  {
    id: 2,
    title: "AP Statistics",
    lessons: 31,
    duration: "14 hrs 16 mins 15 secs",
    price: "₹14,999",
    days: 31,
    bgColor: "bg-pink-500",
    textColor: "text-white",
    imageUrl:
      "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/170997/courses/201225/17233704501301_lyst1723370450348.png", // No image for placeholder
  },
  {
    id: 3,
    title: "Digital SAT Full Course",
    lessons: 53,
    duration: "16 hrs 27 mins 20 secs",
    originalPrice: "₹24,999",
    discountedPrice: "₹22,999",
    discount: "8% off",
    days: 365,
    bgColor: "bg-teal-500",
    textColor: "text-white",
    imageUrl:
      "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/170997/courses/201209/17233704099704_lyst1723370410088.png", // No image for placeholder
  },
  {
    id: 1,
    title: "AP Calculus AB",
    lessons: 84,
    duration: "21 hrs 7 mins 42 secs",
    price: "₹14,999",
    days: 31,
    bgColor: "bg-indigo-900",
    textColor: "text-white",
    imageUrl:
      "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/170997/courses/203244/172366356818810_lyst1723663568217.png", // No image for placeholder
  },
  {
    id: 2,
    title: "AP Statistics",
    lessons: 31,
    duration: "14 hrs 16 mins 15 secs",
    price: "₹14,999",
    days: 31,
    bgColor: "bg-pink-500",
    textColor: "text-white",
    imageUrl:
      "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/170997/courses/201225/17233704501301_lyst1723370450348.png", // No image for placeholder
  },
  {
    id: 3,
    title: "Digital SAT Full Course",
    lessons: 53,
    duration: "16 hrs 27 mins 20 secs",
    originalPrice: "₹24,999",
    discountedPrice: "₹22,999",
    discount: "8% off",
    days: 365,
    bgColor: "bg-teal-500",
    textColor: "text-white",
    imageUrl:
      "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/170997/courses/201209/17233704099704_lyst1723370410088.png", // No image for placeholder
  },
];

const CoursesPage = () => {
    const navigate = useNavigate(); 
  return (
    <div className="container mx-auto p-6">
      {/* Header section with search, filter, and buttons */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Courses</h1>
        <p className="text-gray-500 mb-4">Welcome to your course dashboard</p>

        <div className="flex justify-between items-center mb-4">
          {/* Search and Filter */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search by Title (alt+k or cmd+k)"
              className="border border-gray-300 rounded-md p-2 w-64"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
              Search
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
              Add Filter
            </button>
          </div>

          {/* Right Buttons */}
          <div className="flex space-x-4">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm">
              Reorder
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md"
              onClick={() => navigate("/create-course")} // Navigate to Create Course page
            >
              + Create
            </button>
          </div>
        </div>

        {/* Filter by Published Date */}
        <div className="flex justify-end mb-4">
          <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md">
            Filter by Published Date
          </button>
        </div>

        {/* Statistics section */}
        <div className="flex justify-between items-center border-t border-b py-4">
          <div className="text-center">
            <p className="font-bold text-lg">Total Course</p>
            <p className="text-2xl">9</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">Encrypted Course</p>
            <p className="text-2xl">9</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">Unencrypted Course</p>
            <p className="text-2xl">0</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">Encrypted Course Limit</p>
            <p className="text-2xl">10</p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`${course.bgColor} ${course.textColor} p-6 rounded-lg shadow-lg`}
          >
            {/* Image Placeholder */}
            <div className="mb-4">
              {course.imageUrl ? (
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-40 bg-gray-300 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
              )}
            </div>

            {/* Course Details */}
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="mb-2">
              {course.lessons} Lessons • {course.duration}
            </p>
            {course.discountedPrice ? (
              <div className="flex items-center mb-2">
                <span className="text-lg font-semibold line-through">
                  {course.originalPrice}
                </span>
                <span className="ml-2 text-lg font-semibold">
                  {course.discountedPrice}
                </span>
                <span className="ml-2 text-green-300">{course.discount}</span>
              </div>
            ) : (
              <p className="text-lg font-semibold mb-2">{course.price}</p>
            )}
            <p>{course.days} Days</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
