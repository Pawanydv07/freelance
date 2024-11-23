import React from "react";
import img from "../../assets/image.png";
import backgroundImage from "../../assets/white-4.jpg";
import { motion } from "framer-motion";

const HomeP3 = () => {
  return (
    <div
      className="relative bg-cover bg-center text-gray-800 py-16 px-6 md:px-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/50 backdrop-blur-lg"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <motion.div
          className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 lg:py-12 lg:px-16 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Engaging Content</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Discover a world of possibilities with our cutting-edge platform. Whether you're here to learn, explore, or create, we have something amazing for everyone.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={img}
            alt="A visually appealing description related to the content"
            className="max-w-full rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeP3;
