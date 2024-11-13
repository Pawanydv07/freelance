import React from 'react';
import { motion } from 'framer-motion';
import vid1 from "../assets/quant.mp4";
import vid2 from "../assets/logical18-20.mp4";
import vid3 from "../assets/logical5.mp4";
import vid4 from "../assets/LogicalReasoning.mp4";
import vid5 from "../assets/nonverbal1.mp4";
import vid6 from "../assets/nonverbal2.mp4";
import '../css/video.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const colorChange = {
  hidden: { color: "#333333" },
  visible: { color: "#007BFF" },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const videoHover = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(0, 123, 255, 0.5)",
    transition: { duration: 0.3 },
  },
};

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

const Lecture = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen text-black">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="w-full max-w-5xl mb-24"
      >
        <SectionTitle title="Logical Reasoning" />
        <VideoList videos={logicalReasoningVideos} />
      </motion.div>

      <div className="w-full max-w-5xl border-t-2 border-gray-300 my-16"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="w-full max-w-5xl"
      >
        <SectionTitle title="Non-Verbal Pattern" />
        <VideoList videos={nonVerbalPatternVideos} />
      </motion.div>
    </div>
  );
};

const SectionTitle = ({ title }) => (
  <motion.h1
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="text-4xl font-extrabold text-center mb-8"
  >
    <motion.span
      initial="hidden"
      animate="visible"
      variants={colorChange}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
    >
      {title}
    </motion.span>
  </motion.h1>
);

const VideoList = ({ videos }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {videos.map((video, index) => (
      <motion.div
        key={index}
        className="video-card p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg"
        variants={fadeIn}
        whileHover={videoHover.hover}
      >
        <motion.video
          className="w-full rounded-lg shadow-xl"
          controls
          src={video.src}
          type="video/mp4"
        />
        <motion.h2
          className="text-2xl font-semibold mt-4 text-black hover:text-blue-500"
          variants={fadeIn}
        >
          {video.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2 text-sm"
          variants={fadeIn}
        >
          {video.description}
        </motion.p>
      </motion.div>
    ))}
  </div>
);

export default Lecture;
