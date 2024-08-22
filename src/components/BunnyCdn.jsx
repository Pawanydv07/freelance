import React from 'react';
import vid from "../assets/quant.mp4"
const VideoPlayer = () => {
  return (
    <div>
      <video
        width="100%"
        height="auto"
        controls
        autoPlay
        src={vid}
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
