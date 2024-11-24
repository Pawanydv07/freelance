import React, { useState } from "react";


const HomeP1 = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const splitTextEqually = (text) => {
    if (!text) return ["", ""];
    const midIndex = Math.ceil(text.length / 2);
    return [text.slice(0, midIndex), text.slice(midIndex)];
  };

  if (!slides || slides.length === 0) {
    return <div>Loading...</div>;
  }

  const slide = slides[currentSlide] || {};
  const [firstPart, secondPart] = splitTextEqually(slide.maintitle);

  return (
    <div className="slider-container">
      <div className="text">
        <h2>{slide.title}</h2>
        <h1>
          <span className="first-part">{firstPart}</span><br/>
          <span className="second-part">{secondPart}</span>
        </h1>
        <p>{slide.description}</p>
      </div>
      <img
        src={slide.image}
        alt={`Slide ${currentSlide + 1}`}
        className="slide-image"
      />
      <button onClick={prevSlide} className="prev">
        &#10094;
      </button>
      <button onClick={nextSlide} className="next">
        &#10095;
      </button>
    </div>
  );
};

export default HomeP1;
