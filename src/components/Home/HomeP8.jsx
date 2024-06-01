import React from 'react';
import "../../css/Home/HomeP8.css";

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'This course was amazing! The instructors were very knowledgeable and the content was well-structured.',
    image: require('../../assets/student1.webp')
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'I learned so much from this program. It was challenging but extremely rewarding.',
    image: require('../../assets/student1.webp')
  },
  {
    id: 3,
    name: 'Sam Wilson',
    feedback: 'Great experience! The hands-on projects really helped me understand the material.',
    image: require('../../assets/student1.webp')
  }
];

const StudentTestimonials = () => {
  return (
    <div className="testimonials-container">
      {/* <h1 className="heading">Student Testimonials</h1> */}
      <div className="testimonials-wrapper">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="student-image" />
            <div className="testimonial-content">
              <h2 className="student-name">{testimonial.name}</h2>
              <p className="student-feedback">"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentTestimonials;
