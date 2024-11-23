import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faLeaf, faBook } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; // For animations
import backgroundImage from '../../assets/white3.jpg';

const HomeP2 = () => {
  const boxes = [
    {
      icon: faCoffee,
      heading: 'Quality Coffee',
      text: 'Enjoy the best coffee in town, freshly brewed and served with a smile.',
    },
    {
      icon: faAppleAlt,
      heading: 'Fresh Fruits',
      text: 'Our fruits are always fresh, providing you with the best nutrition.',
    },
    {
      icon: faLeaf,
      heading: 'Eco-Friendly',
      text: 'We are committed to protecting the environment with sustainable practices.',
    },
    {
      icon: faBook,
      heading: 'Learning Resources',
      text: 'Access a wide range of educational materials and resources.',
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center text-gray-800 py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white"></div>

      <div className="relative container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-600">Our</span> Features
        </motion.h1>

        {/* Boxes */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Icon */}
              <FontAwesomeIcon
                icon={box.icon}
                className="text-purple-500 text-5xl mb-4 transition hover:text-purple-700"
              />
              {/* Heading */}
              <h2 className="text-xl font-semibold mb-3">{box.heading}</h2>
              {/* Description */}
              <p className="text-gray-600 mb-4">{box.text}</p>
              {/* Button */}
              <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                Learn More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeP2;
