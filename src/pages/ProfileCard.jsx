import React from 'react';
import profile from "../assets/25913.jpg";

const ProfileCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-10">
      <div className="flex items-center space-x-4">
        <img src={profile} alt="Profile" className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Pawan Yadav</h2>
          <p className="text-gray-700">Full Stack Engineer</p>
          <p className="text-gray-500">Rank 57,775</p>
        </div>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Edit Profile
      </button>
      <div className="mt-4">
        <p className="flex items-center text-blue-600">
        
          <span className="font-semibold">Location:</span>
          <span className="text-gray-700 ml-2">India</span>
        </p>
        <p className="flex items-center text-blue-600 mt-2">
        
          <span className="font-semibold">College:</span>
          <span className="text-gray-700 ml-2">Haldia Institute of Technology</span>
        </p>
        <p className="flex items-center text-blue-600 mt-2">
       
          <span className="font-semibold">Portfolio:</span>
          <span className="text-gray-700 ml-2">
            <a href="https://pawan-yadav34.netlify.app/" target="_blank" rel="noopener noreferrer">https://pawan-yadav34.netlify.app/</a>
          </span>
        </p>
        <p className="flex items-center text-blue-600 mt-2">
        
          <span className="font-semibold">Github:</span>
          <span className="text-gray-700 ml-2">starydv7</span>
        </p>
        <p className="flex items-center text-blue-600 mt-2">
          
          <span className="font-semibold">LinkedIn:</span>
          <span className="text-gray-700 ml-2">pawanstarydv7</span>
        </p>
      </div>
      <div className="mt-6 flex flex-wrap space-x-2">
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">javascript</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">reactjs</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">redux</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">nodejs-nan</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">mongodb</span>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">632/3215</h3>
            <p className="text-gray-500">Solved</p>
          </div>
          <div className="text-right">
            <p className="text-green-500">Easy: 189/810</p>
            <p className="text-yellow-500">Med: 339/1688</p>
            <p className="text-red-500">Hard: 104/717</p>
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <span className="bg-yellow-400 text-gray-700 px-2 py-1 rounded-lg">50 Days Badge 2023</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Other Badge</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Another Badge</span>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-bold">208 submissions in the past one year</h4>
        <div className="h-24 bg-gray-200 mt-2 rounded-lg">
          {/* Replace this with an actual graph component or an image */}
          <img src="submissions-graph-url" alt="Submissions Graph" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
