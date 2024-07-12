import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <img src="profile-pic-url" alt="Profile" className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-xl font-bold">Pawan Yadav</h2>
          <p className="text-gray-500">Full Stack Engineer</p>
          <p className="text-gray-500">Rank 56,639</p>
        </div>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Edit Profile
      </button>
      <div className="mt-4">
        <p className="flex items-center text-gray-500">
          <span className="material-icons">location_on</span> India
        </p>
        <p className="flex items-center text-gray-500">
          <span className="material-icons">school</span> Haldia Institute of Technology
        </p>
        <p className="flex items-center text-gray-500">
          <span className="material-icons">public</span> https://pawan-yadav34.netlify.app/
        </p>
        <p className="flex items-center text-gray-500">
          <span className="material-icons">code</span> starydv7
        </p>
        <p className="flex items-center text-gray-500">
          <span className="material-icons">linkedin</span> pawanstarydv7
        </p>
      </div>
      <div className="mt-4 flex space-x-2">
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">javascript</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">reactjs</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">redux</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">nodejs-nan</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">mongodb</span>
      </div>
    </div>
  );
};

export default ProfileCard;
