import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vid1 from "../assets/quant.mp4";
import vid2 from "../assets/logical18-20.mp4";
import vid3 from "../assets/logical5.mp4";
import vid4 from "../assets/LogicalReasoning.mp4";
import vid5 from "../assets/nonverbal1.mp4";
import vid6 from "../assets/nonverbal2.mp4";
import "../css/video.css";

const Lecture = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <div
      className={`app-container ${isDarkMode ? "dark" : "light"} mt-[75px]`}
    >
      <div
        className={`relative min-h-screen ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 to-gray-700 text-white"
            : "bg-gradient-to-r from-white to-gray-100 text-black"
        }`}
      >
        {/* Header Section */}
        <header className="sticky top-0 w-full py-6 px-8 flex justify-between items-center bg-opacity-90 backdrop-blur-lg z-50 shadow-md">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
          >
            Video Tutorials
          </motion.h1>
          <motion.button
            onClick={toggleDarkMode}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </motion.button>
        </header>

        {/* Content Section */}
        <div className="flex flex-col items-center py-16">
          {/* Logical Reasoning Videos */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1.2 } },
            }}
            className="w-full max-w-6xl mb-24 text-center"
          >
            <SectionTitle title="Logical Reasoning" />
            <VideoList videos={logicalReasoningVideos} />
          </motion.div>

          {/* Section Divider */}
          <div className="w-full max-w-6xl border-t-2 border-gray-400 my-16"></div>

          {/* Non-Verbal Patterns Videos */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1.2 } },
            }}
            className="w-full max-w-6xl"
          >
            <SectionTitle title="Non-Verbal Patterns" />
            <VideoList videos={nonVerbalPatternVideos} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Section Title Component
const SectionTitle = ({ title }) => (
  <motion.h1
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2 } },
    }}
    className="text-5xl font-bold mb-8"
  >
    <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
      {title}
    </span>
  </motion.h1>
);

// Video List Component
const VideoList = ({ videos }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
    {videos.map((video, index) => (
      <motion.div
        key={index}
        className="video-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-2xl transform transition-transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative group">
          <motion.video
            className="w-full h-56 rounded-lg object-cover shadow-lg group-hover:shadow-2xl transition-all"
            controls
            src={video.src}
            type="video/mp4"
          />
          {/* Video Overlay Effect */}
          <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <motion.h2
          className="text-xl font-bold mt-4 text-gray-800 dark:text-white group-hover:text-indigo-500 transition-colors"
          whileHover={{ color: "#5B21B6" }}
        >
          {video.title}
        </motion.h2>
        <p className="text-gray-600 mt-2 text-sm dark:text-gray-300 group-hover:text-gray-400 transition-colors">
          {video.description}
        </p>
        {/* Action Button */}
        <motion.button
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
        >
          Watch Now
        </motion.button>
      </motion.div>
    ))}
  </div>
);

// Video Data
const logicalReasoningVideos = [
  { src: vid1, title: "Introduction to Logical Reasoning", description: "Learn the basics of logical reasoning." },
  { src: vid2, title: "Advanced Logical Reasoning Techniques", description: "Explore advanced problem-solving strategies." },
  { src: vid3, title: "Logical Reasoning Practice Questions", description: "Practice and solidify logical reasoning concepts." },
  { src: vid4, title: "Logical Reasoning in Real Life", description: "Apply logical reasoning to real-life scenarios." },
];

const nonVerbalPatternVideos = [
  { src: vid5, title: "Introduction to Non-Verbal Patterns", description: "Basics of non-verbal patterns and techniques." },
  { src: vid6, title: "Advanced Non-Verbal Pattern Techniques", description: "Solve advanced non-verbal pattern problems." },
];

export default Lecture;
