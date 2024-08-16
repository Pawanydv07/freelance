import React from "react";
import '../css/Profile.css';  // You can create a CSS file to manage these styles

const ProfilePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 flex justify-center items-center">
      <div className="max-w-4xl w-full">
        {/* Employee Details Section */}
        <div className="glow-box bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Employee Details</h2>
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
            <div className="glow-box bg-gray-700 p-4 rounded-lg transform transition-transform hover:scale-105">
              <p className="text-2xl font-bold">309</p>
              <p className="text-gray-400">Total Attendance</p>
            </div>
            <div className="glow-box bg-gray-700 p-4 rounded-lg transform transition-transform hover:scale-105">
              <p className="text-2xl font-bold">08:46</p>
              <p className="text-gray-400">Avg Check In Time</p>
            </div>
            <div className="glow-box bg-gray-700 p-4 rounded-lg transform transition-transform hover:scale-105">
              <p className="text-2xl font-bold">17:04</p>
              <p className="text-gray-400">Avg Check Out Time</p>
            </div>
            <div className="glow-box bg-gray-700 p-4 rounded-lg transform transition-transform hover:scale-105">
              <p className="text-2xl font-bold">Role Model</p>
              <p className="text-gray-400">Employee Predicate</p>
            </div>
          </div>
        </div>

        {/* Attendance History Section */}
        <div className="glow-box bg-gray-800 rounded-lg p-6 shadow-lg mt-6 transform transition-transform hover:scale-105">
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
            <div className="glow-box bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-105">
              <p className="text-gray-400">March 08, 2023</p>
              <p className="text-green-500">On Time</p>
              <p className="text-gray-400">Check In Time: 08:53</p>
              <p className="text-gray-400">Check Out Time: 17:15</p>
            </div>
            <div className="glow-box bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-105">
              <p className="text-gray-400">March 07, 2023</p>
              <p className="text-yellow-500">Late</p>
              <p className="text-gray-400">Check In Time: 08:27</p>
              <p className="text-gray-400">Check Out Time: 17:09</p>
            </div>
            <div className="glow-box bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-105">
              <p className="text-gray-400">March 06, 2023</p>
              <p className="text-red-500">Absent</p>
              <p className="text-gray-400">Check In Time: --</p>
              <p className="text-gray-400">Check Out Time: --</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
