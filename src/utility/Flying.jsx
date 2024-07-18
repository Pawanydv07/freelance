import React from 'react';
import birdImage from '../assets/futurebird.png';

function Flying() {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="animate-fly">
        <img src={birdImage} alt="Futuristic Robotic Hummingbird" className="w-48 animate-flap" />
      </div>
    </div>
  );
}

export default Flying;
