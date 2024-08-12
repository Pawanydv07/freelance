import React from 'react';

const BunnyCDNVideo = () => {
  // Update the video URL to point to your new .mp4 file
  const videoUrl = 'https://storage.bunnycdn.com/mockopedia/PRACTICE%20QUESTION%20VIDEO/M9/Q1-5.mp4'; // Example URL

  return (
    <div>
      <h1>Practice Question Video</h1>
      <video width="600" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BunnyCDNVideo;
