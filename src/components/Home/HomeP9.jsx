import React from "react";

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
      <span
        key={i}
        className={`star ${i < rating ? 'filled text-yellow-500' : 'text-gray-400'}`}
      >
        &#9733;
      </span>
    ));
  };

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="text-center mb-16">
        <p className="font-bold text-lg text-teal-500">Why Choose Us</p>
        <h1 className="text-4xl font-bold text-gray-800">
          STUDENT'S <span className="text-teal-500">TESTIMONIAL</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center p-6">
              <div className="w-1/3 pr-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <div className="w-2/3">
                <p className="text-xl font-semibold text-gray-800">{testimonial.name}</p>
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeP9;
