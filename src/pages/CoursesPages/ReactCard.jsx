import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/reactCard.css'

const ReactCard = ({ videoSrc, title, category, author, views, date }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = (event) => {
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  };



  return (
    <div className="video-card relative overflow-hidden rounded-lg shadow-lg">
      <video className="w-full h-auto object-cover" >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50">
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <p className="text-gray-300">{category}</p>
      <div className="flex justify-between items-center text-gray-400 text-sm">
        <span>By {author}</span>
        <span>{views} views • {date}</span>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <button className="bg-blue-500 text-white px-2 py-2 rounded-full">
        Play
      </button>
    </div>
  </div>
  );
};

export default ReactCard;
