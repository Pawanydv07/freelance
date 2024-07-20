import React from 'react';
import card5Background from '../assets/black1.jpg'; // Adjust the path according to your file structure

const videos = [
  {
    title: 'Introduction to Programming Aptitude',
    description: 'An overview of programming aptitude and its importance in the tech industry.',
    duration: '10:00 Minutes',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Basic Programming Concepts',
    description: 'Understanding variables, data types, and basic operations.',
    duration: '15:30 Minutes',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Control Structures',
    description: 'Introduction to control structures like if-else and loops.',
    duration: '20:45',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Functions and Modules',
    description: 'Learn about functions, their use, and modular programming.',
    duration: '25:00',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Data Structures',
    description: 'Understanding arrays, lists, and other data structures.',
    duration: '30:15',
    thumbnail: card5Background
  },
  {
    title: 'Algorithms',
    description: 'Introduction to algorithms and their importance.',
    duration: '18:20',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Problem Solving Techniques',
    description: 'Techniques for solving common programming problems.',
    duration: '22:10',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Object-Oriented Programming',
    description: 'Basics of object-oriented programming and its principles.',
    duration: '28:45',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Recursion',
    description: 'Understanding recursion and how to apply it.',
    duration: '14:55',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Sorting Algorithms',
    description: 'Learn about different sorting algorithms and their complexities.',
    duration: '19:40',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Searching Algorithms',
    description: 'Introduction to searching algorithms and their applications.',
    duration: '21:50',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Graph Algorithms',
    description: 'Understanding graphs and basic graph algorithms.',
    duration: '26:35',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Graph Algorithms',
    description: 'Understanding graphs and basic graph algorithms.',
    duration: '26:35',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Graph Algorithms',
    description: 'Understanding graphs and basic graph algorithms.',
    duration: '26:35',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Graph Algorithms',
    description: 'Understanding graphs and basic graph algorithms.',
    duration: '26:35',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Graph Algorithms',
    description: 'Understanding graphs and basic graph algorithms.',
    duration: '26:35 Minutes',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },

  {
    title: 'Dynamic Programming',
    description: 'Introduction to dynamic programming and its applications.',
    duration: '33:25',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Complexity Analysis',
    description: 'Learn about time and space complexity analysis.',
    duration: '17:30',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Programming Best Practices',
    description: 'Best practices for writing clean and efficient code.',
    duration: '20:00',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Graph Algorithms',
    description: 'Understanding graphs and basic graph algorithms.',
    duration: '26:35',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
  {
    title: 'Graph Algorithms',
    description: 'Understanding graphs and basic graph algorithms.',
    duration: '26:35',
    thumbnail: 'https://via.placeholder.com/150' // Replace with actual thumbnail URL
  },
];

const VideoCard = ({ title, description, duration, thumbnail }) => (
  <div className="backdrop-blur-lg  bg-opacity-20 border-double border-4 border-rose-200 border-opacity-90 rounded-br-lg shadow-lg p-6 m-4 transform transition-transform hover:-translate-y-2 hover:shadow-xl hover:bg-indigo-200 hover:bg-opacity-30">
    <img src={thumbnail} alt={title} className="rounded-lg mb-4 w-full h-40 object-cover" />
    <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
    <p className="text-gray-200 mb-4">{description}</p>
    <p className="text-gray-300">Duration: {duration}</p>
  </div>
);

const ProgrammingAp = () => {
  return (
    <div
      className="w-full min-h-screen bg-slate-900 p-8 mt-4"
      style={{ backgroundImage: `url(${card5Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-4xl text-white font-bold text-center mb-8 bg-orange-200 bg-opacity-20 border-2 border-green-300 border-opacity-30 rounded-lg shadow-lg p-6 m-4 transform transition-transform hover:-translate-y-2 hover:shadow-xl hover:bg-black hover:bg-opacity-30">Programming Aptitude Lectures</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default ProgrammingAp;
