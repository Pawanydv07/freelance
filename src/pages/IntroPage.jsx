import React from 'react';
import "../css/intro.css"
const IntroPage = () => {
  return (
    <div className="relative h-screen w-screen main mt-18 ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={`${process.env.PUBLIC_URL}/background-video.mp4`}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl mb-8">Your journey starts here</p>
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
