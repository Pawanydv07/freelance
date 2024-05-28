import React from "react";
import Slider from "../components/Slider";
import "../css/Home.css"
import sliderimage1 from "../assets/photo1.jpg";
import sliderimage2 from "../assets/photo2.jpg";
import sliderimage3 from "../assets/photo3.jpg";

import "../css/Home/Home.css";

import HomeP1 from "../components/Home/HomeP1";
import HomeP2 from "../components/Home/HomeP2";
import HomeP3 from "../components/Home/HomeP3";

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

  return (
    <div className="home-container">
      <HomeP1 slides={slides} />
      <HomeP2 />
      <HomeP3 />
    </div>
  );
};
