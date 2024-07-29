import React from 'react';
import profile from "../assets/profile.jpg"; // Update the path to your profile image
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProfilePage = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Daily Progress',
        data: [5, 10, 15, 20, 25, 30, 35],
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
      },
      {
        label: 'DSA Practice',
        data: [4, 8, 12, 16, 20, 24, 28],
        fill: false,
        backgroundColor: 'red',
        borderColor: 'red',
      },
      {
        label: 'Numerical Questions Practice',
        data: [3, 6, 9, 12, 15, 18, 21],
        fill: false,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
      },
      {
        label: 'Other Activities',
        data: [2, 4, 6, 8, 10, 12, 14],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-gradient-custom min-h-screen p-8">
      <div className="bg-white shadow rounded-lg p-6 max-w-5xl mx-auto mt-10">
        <div className="flex items-center space-x-4">
          <img src={profile} alt="Profile" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-blue-600">Jason Ortega</h2>
            <p className="text-gray-700">Full Stack Developer</p>
            <p className="text-gray-500">San Francisco, CA, USA</p>
            <p className="text-gray-500">jortega@gmail.com</p>
            <p className="text-gray-500">510.134.3850</p>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4 col-span-2">
            <h3 className="font-bold text-gray-700 mb-2">Current Projects</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-blue-600 font-semibold">Project 1</p>
                <p className="text-gray-700">Building a full-stack application</p>
                <p className="text-gray-500">Due: Aug 30, 2024</p>
              </div>
              <div>
                <p className="text-blue-600 font-semibold">Project 2</p>
                <p className="text-gray-700">Learning React Native</p>
                <p className="text-gray-500">Due: Sep 15, 2024</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold text-gray-700 mb-2">Skills</h3>
            <div className="flex flex-wrap space-x-2">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">JavaScript</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">React</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Node.js</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">MongoDB</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Express</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-gray-700 mb-2">Daily Progress</h3>
          <div className="bg-white shadow rounded-lg p-4">
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-gray-700 mb-2">Developer Details</h3>
          <div className="bg-white shadow rounded-lg p-4">
            <p className="flex items-center text-blue-600">
              <span className="font-semibold">Location:</span>
              <span className="text-gray-700 ml-2">San Francisco, CA, USA</span>
            </p>
            <p className="flex items-center text-blue-600 mt-2">
              <span className="font-semibold">College:</span>
              <span className="text-gray-700 ml-2">XYZ University</span>
            </p>
            <p className="flex items-center text-blue-600 mt-2">
              <span className="font-semibold">Portfolio:</span>
              <span className="text-gray-700 ml-2">
                <a href="https://jason-ortega-portfolio.com" target="_blank" rel="noopener noreferrer">https://jason-ortega-portfolio.com</a>
              </span>
            </p>
            <p className="flex items-center text-blue-600 mt-2">
              <span className="font-semibold">GitHub:</span>
              <span className="text-gray-700 ml-2">jasonortega</span>
            </p>
            <p className="flex items-center text-blue-600 mt-2">
              <span className="font-semibold">LinkedIn:</span>
              <span className="text-gray-700 ml-2">jason-ortega</span>
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-gray-700 mb-2">Badges</h3>
          <div className="flex space-x-2">
            <span className="bg-yellow-400 text-gray-700 px-2 py-1 rounded-lg">50 Days Badge 2023</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Other Badge</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Another Badge</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
