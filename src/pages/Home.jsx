import React from "react";
import { motion } from "framer-motion";
import sliderimage1 from "../assets/photo1.jpg";
import sliderimage2 from "../assets/photo2.jpg";
import sliderimage3 from "../assets/photo3.jpg";
import "../css/Home.css";
import "../css/Home/Home.css";
import HomeP1 from "../components/Home/HomeP1";
import HomeP2 from "../components/Home/HomeP2";
import HomeP3 from "../components/Home/HomeP3";
import HomeP4 from "../components/Home/HomeP4";
import HomeP5 from "../components/Home/HomeP5";
import HomeP6 from "../components/Home/HomeP6";
import HomeP7 from "../components/Home/HomeP7";
import HomeP11 from "../components/Home/HomeP11";
import HomeP10 from "../components/Home/HomeP10";
import HomeP9 from "../components/Home/HomeP9";
import Footer1 from "../components/Home/Footer1";
import IntroPage from "./IntroPage";

// import Choose from "./Choose";

export const Home = () => {
  const slides = [
    {
      image: sliderimage1,
      title: "100% placement",
      maintitle: "Welcome to Our Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet semper libero, in volutpat justo lacinia id. Sed ultrices euismod turpis, non blandit lacus.",
    },
    {
      image: sliderimage2,
      title: "Explore Our Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet semper libero, in volutpat justo lacinia id. Sed ultrices euismod turpis, non blandit lacus.",
    },
    {
      image: sliderimage3,
      title: "Contact Us Today",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet semper libero, in volutpat justo lacinia id. Sed ultrices euismod turpis, non blandit lacus.",
    },
  ];

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="home-container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <IntroPage />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <HomeP2 />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <HomeP3 />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <HomeP4 />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <HomeP5 />
      </motion.div>
      {/* Uncomment and add animations for additional sections as needed */}
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <HomeP6 />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <HomeP7 />
      </motion.div> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <HomeP11 />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <HomeP9 />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <HomeP10 />
      </motion.div>
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="section"
      >
        <Footer1 />
      </motion.div> */}
    </div>
  );
};
