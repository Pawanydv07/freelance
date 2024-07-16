// CourseDetailReact.jsx
import React from 'react';

// Dummy data for video list (replace with actual data)
const videoList = [
  { id: 1, title: 'Basic ReactJS Installation Setup', thumbnail: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Basic ReactJS Create App CSS Setup', thumbnail: 'https://via.placeholder.com/300' },
  { id: 3, title: 'Writing the First Page of ReactJS App', thumbnail: 'https://via.placeholder.com/300' },
  // Add more videos as needed
];

const CourseDetailReact = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">React Course Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoList.map((video) => (
          <div key={video.id} className="bg-white overflow-hidden shadow rounded-lg">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="px-4 py-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
              {/* Add description or other details if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailReact;
