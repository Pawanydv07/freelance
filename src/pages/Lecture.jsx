import React, { useState } from 'react';
import { motion } from 'framer-motion';
import vid1 from "../assets/quant.mp4";
import vid2 from "../assets/logical18-20.mp4";
import vid3 from "../assets/logical5.mp4";
import vid4 from "../assets/LogicalReasoning.mp4";
import vid5 from "../assets/nonverbal1.mp4";
import vid6 from "../assets/nonverbal2.mp4";
import '../css/video.css';

// Enhanced Dark Mode Toggle Functionality
const Lecture = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className={`relative min-h-screen ${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-50 to-white'} text-black`}>
        {/* Header Section with Animated Title */}
        <header className="absolute top-0 w-full py-6 px-8 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Video Tutorials
          </motion.h1>
          <motion.button
            onClick={toggleDarkMode}
            className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </motion.button>
        </header>

        <div className="flex flex-col items-center py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.2 } } }}
            className="w-full max-w-6xl mb-24 text-center"
          >
            <SectionTitle title="Logical Reasoning" />
            <VideoList videos={logicalReasoningVideos} />
          </motion.div>

          <div className="w-full max-w-6xl border-t-2 border-gray-300 my-16"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.2 } } }}
            className="w-full max-w-6xl"
          >
            <SectionTitle title="Non-Verbal Pattern" />
            <VideoList videos={nonVerbalPatternVideos} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Animated Section Title with Gradient Text
const SectionTitle = ({ title }) => (
  <motion.h1
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2 } },
    }}
    className="text-5xl font-bold mb-8">
    <motion.span
      className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { scale: 0.8 },
        visible: { scale: 1, transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" } },
      }}>
      {title}
    </motion.span>
  </motion.h1>
);

// Enhanced Video List with Modern Design
const VideoList = ({ videos }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
    {videos.map((video, index) => (
      <motion.div
        key={index}
        className="video-card p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105"
        whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0, 123, 255, 0.2)" }}>
        
        <div className="relative">
          <motion.video
            className="w-full h-64 rounded-lg object-cover shadow-lg"
            controls
            src={video.src}
            type="video/mp4"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black opacity-50 hover:opacity-0 transition-opacity duration-300">
            <motion.div className="text-white text-4xl">▶</motion.div>
          </motion.div>
        </div>
        
        <motion.h2
          className="text-2xl font-semibold mt-4 text-black dark:text-white hover:text-blue-500"
          whileHover={{ color: "#007BFF" }}>
          {video.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2 text-sm dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}>
          {video.description}
        </motion.p>

        <motion.button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 123, 255, 0.2)" }}>
          Watch Now
        </motion.button>
      </motion.div>
    ))}
  </div>
);

// Dummy Video Data for Logical Reasoning
const logicalReasoningVideos = [
  { src: vid1, title: "Introduction to Logical Reasoning", description: "Learn the basics of logical reasoning." },
  { src: vid2, title: "Advanced Logical Reasoning Techniques", description: "Explore advanced problem-solving strategies." },
  { src: vid3, title: "Logical Reasoning Practice Questions", description: "Practice and solidify logical reasoning concepts." },
  { src: vid4, title: "Logical Reasoning in Real Life", description: "Apply logical reasoning to real-life scenarios." },
];

// Dummy Video Data for Non-Verbal Patterns
const nonVerbalPatternVideos = [
  { src: vid5, title: "Introduction to Non-Verbal Patterns", description: "Basics of non-verbal patterns and techniques." },
  { src: vid6, title: "Advanced Non-Verbal Pattern Techniques", description: "Solve advanced non-verbal pattern problems." },
];

export default Lecture;
