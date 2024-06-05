import React from "react";
import "../../css/Home/HomeP9.css";
import studentImage from "../../assets/student2.jpg";

const HomeP9 = () => {
  const testimonials = [
    {
      id: 1,
      text: "This platform has transformed my learning experience. The courses are well-structured and the instructors are amazing!",
      name: "John Doe",
      rating: 5,
      image: studentImage, // Use the imported image
    },
    {
      id: 2,
      text: "I've gained so much knowledge and confidence. Highly recommend to anyone looking to improve their skills.",
      name: "Jane Smith",
      rating: 4,
      image: studentImage, // Use the imported image
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>&#9733;</span>
    ));
  };

  return (
    <div className="student-main">
      <div className="student-choose text-center">
        <p className="font-bold text-lg student-text">Why choose us</p>
        <h1 className="text-5xl student-div">
          STUDENT'S <span className="gradient-text text-lg">TESTIMONIAL</span>
        </h1>
      </div>
      <div className="main-container">
        <div className="testimonial-half">
          <div className="testimonial-content">
            <div className="testimonial-image-container">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-text-container">
              <p className="testimonial-name">{testimonials[0].name}</p>
              <div className="testimonial-rating">
                {renderStars(testimonials[0].rating)}
              </div>
              <p className="testimonial-text">{testimonials[0].text}</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="testimonial-half">
          <div className="testimonial-content">
            <div className="testimonial-image-container">
              <img
                src={testimonials[1].image}
                alt={testimonials[1].name}
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-text-container">
              <p className="testimonial-name">{testimonials[1].name}</p>
              <div className="testimonial-rating">
                {renderStars(testimonials[1].rating)}
              </div>
              <p className="testimonial-text">{testimonials[1].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeP9;
