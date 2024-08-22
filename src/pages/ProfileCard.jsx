import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faCode,
  faUsers,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Profile.css";

const ProfilePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 flex justify-center items-center mt-16">
      <div className="max-w-6xl w-full">
        {/* Student Details Section */}
        <div className="glow-box bg-black rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-600 border-b-2 border-t-2 border-orange-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Student Dashboard</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg transform transition-transform hover:scale-110">
              Download Info
            </button>
          </div>
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="rounded-full w-16 h-16 mr-4 transform transition-transform hover:scale-110"
            />
            <div>
              <h3 className="text-xl font-bold">Natashia Khaleira</h3>
              <p className="text-gray-400">Head of UX Design</p>
              <p className="text-gray-400">Phone: (+62) 812 3456-7890</p>
              <p className="text-gray-400">Email: natashiakhaleira@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-center space-x-4">
            <div className="glow-box bg-black border-t-2  border-b-2 border-green-900 p-4 rounded-lg transform transition-transform hover:scale-105">
              <p className="text-2xl font-bold">309</p>
              <p className="text-gray-400">Total Attendance</p>
            </div>
            <div className="glow-box bg-black border-t-2  border-b-2 border-green-900 p-4 rounded-lg transform transition-transform hover:scale-105">
              <p className="text-2xl font-bold">08:46</p>
              <p className="text-gray-400">Avg Check In Time</p>
            </div>
            <div className="glow-box bg-black border-t-2  border-b-2 border-green-900 p-4 rounded-lg transform transition-transform hover:scale-105">
              <p className="text-2xl font-bold">17:04</p>
              <p className="text-gray-400">Avg Check Out Time</p>
            </div>
            <div className="glow-box bg-black border-t-2  border-b-2 border-green-900 p-4 rounded-lg transform transition-transform hover:scale-105">
              <p className="text-2xl font-bold">Role Model</p>
              <p className="text-gray-400">Employee Predicate</p>
            </div>
          </div>
        </div>

        {/* Attendance History Section */}
        <div className="glow-box glow-box-3d bg-gray-800 rounded-lg p-6 shadow-lg mt-6 transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Attendance History</h2>
            <div className="flex space-x-2">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg transform transition-transform hover:scale-110">
                Sort
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg transform transition-transform hover:scale-110">
                Filter
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="glow-box glow-box-3d bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-105">
              <div className="inner-3d">
                {/* <p className="text-gray-400">March 08, 2023</p>
        <p className="text-green-500">On Time</p>
        <p className="text-gray-400">Check In Time: 08:53</p>
        <p className="text-gray-400">Check Out Time: 17:15</p> */}
              </div>
            </div>
            <div className="glow-box glow-box-3d bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-105">
              <div className="inner-3d">
                {/* <p className="text-gray-400">March 07, 2023</p>
        <p className="text-yellow-500">Late</p>
        <p className="text-gray-400">Check In Time: 08:27</p>
        <p className="text-gray-400">Check Out Time: 17:09</p> */}
              </div>
            </div>
            <div className="glow-box glow-box-3d bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-105">
              <div className="inner-3d">
                {/* <p className="text-gray-400">March 06, 2023</p>
        <p className="text-red-500">Absent</p>
        <p className="text-gray-400">Check In Time: --</p>
        <p className="text-gray-400">Check Out Time: --</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="glow-box bg-gray-800 rounded-lg p-6 shadow-lg mt-6 transform transition-transform hover:scale-105">
          <h2 className="text-lg font-semibold mb-4">Badges</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="glow-box bg-gray-700 p-4 rounded-lg text-center transform transition-transform hover:scale-105">
              <FontAwesomeIcon
                icon={faBrain}
                className="text-4xl text-green-500 mb-2"
              />
              <p className="text-2xl font-bold">Aptitude Reasoning</p>
            </div>
            <div className="glow-box bg-gray-700 p-4 rounded-lg text-center transform transition-transform hover:scale-105">
              <FontAwesomeIcon
                icon={faCode}
                className="text-4xl text-green-500 mb-2"
              />
              <p className="text-2xl font-bold">Coding Challenges</p>
            </div>
            <div className="glow-box bg-gray-700 p-4 rounded-lg text-center transform transition-transform hover:scale-105">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-4xl text-green-500 mb-2"
              />
              <p className="text-2xl font-bold">Team Collaboration</p>
            </div>
            <div className="glow-box bg-gray-700 p-4 rounded-lg text-center transform transition-transform hover:scale-105">
              <FontAwesomeIcon
                icon={faCrown}
                className="text-4xl text-green-500 mb-2"
              />
              <p className="text-2xl font-bold">Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
