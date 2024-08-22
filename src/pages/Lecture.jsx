// src/components/VideoLecturePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import vid1 from "../assets/quant.mp4";
import vid2 from "../assets/logical18-20.mp4";
import vid3 from "../assets/logical5.mp4";
import vid4 from "../assets/LogicalReasoning.mp4";
import vid5 from "../assets/nonverbal2.mp4";
import vid6 from "../assets/nonverbal2.mp4";
import '../css/video.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const colorChange = {
  hidden: { color: "#ffffff" },
  visible: { color: "#00FF00" }, // Change to your desired color
};

const logicalReasoningVideos = [
  {
    src: vid1,
    title: "Introduction to Logical Reasoning",
    description: "This video introduces the basics of logical reasoning, covering fundamental techniques and strategies to approach logical problems.",
  },
  {
    src: vid2,
    title: "Advanced Logical Reasoning Techniques",
    description: "Explore advanced techniques in logical reasoning, including complex problem-solving strategies and examples.",
  },
  {
    src: vid3,
    title: "Logical Reasoning Practice Questions",
    description: "This lecture provides practice questions and solutions to help solidify your understanding of logical reasoning concepts.",
  },
  {
    src: vid4,
    title: "Logical Reasoning in Real Life",
    description: "Learn how logical reasoning can be applied in real-life scenarios and decision-making processes.",
  },
];

const nonVerbalPatternVideos = [
  {
    src: vid5,
    title: "Introduction to Non-Verbal Patterns",
    description: "This video covers the basics of non-verbal patterns, including key concepts and techniques.",
  },
  {
    src: vid6,
    title: "Advanced Non-Verbal Pattern Techniques",
    description: "Learn advanced techniques for solving non-verbal pattern problems and enhancing your skills.",
  },

];

const Lecture = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen text-white mt-12">
      {/* Logical Reasoning Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mb-24"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          <motion.span
            initial="hidden"
            animate="visible"
            variants={colorChange}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Logical Reasoning
          </motion.span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mb-12 text-center"
        >
          This section covers various aspects of logical reasoning, including introductory concepts, advanced techniques, practice questions, and real-life applications.
        </motion.p>
        <div className="space-y-12">
          {logicalReasoningVideos.map((video, index) => (
            <div key={index}>
              <motion.video
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
                className="w-full rounded-lg shadow-lg video-glow"
                controls
                src={video.src}
                type="video/mp4"
              >
                Your browser does not support the video tag.
              </motion.video>
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl font-semibold mt-4"
              >
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={colorChange}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  {video.title}
                </motion.span>
              </motion.h2>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-400 mt-2"
              >
                {video.description}
              </motion.p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Separator Line */}
      <div className="w-full max-w-4xl border-t-2 border-gray-700 my-16"></div>

      {/* Non-Verbal Pattern Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          <motion.span
            initial="hidden"
            animate="visible"
            variants={colorChange}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Non-Verbal Pattern
          </motion.span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-400 mb-12 text-center"
        >
          This section delves into non-verbal patterns, exploring foundational concepts, advanced techniques, practice questions, and real-life applications.
        </motion.p>
        <div className="space-y-12">
          {nonVerbalPatternVideos.map((video, index) => (
            <div key={index}>
              <motion.video
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
                className="w-full rounded-lg shadow-lg video-glow"
                controls
                src={video.src}
                type="video/mp4"
              >
                Your browser does not support the video tag.
              </motion.video>
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl font-semibold mt-4"
              >
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={colorChange}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  {video.title}
                </motion.span>
              </motion.h2>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-400 mt-2"
              >
                {video.description}
              </motion.p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Lecture;
