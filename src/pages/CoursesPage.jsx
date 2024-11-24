import React, { useState, useEffect } from 'react';

const AptitudePage = () => {
  // State for Enrollment Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // State for Quiz progress
  const [progress, setProgress] = useState(25); // Example starting at 25%

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState(3600); // Example countdown in seconds (1 hour)

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Convert seconds into hours, minutes, seconds
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Handle quiz progress
  const handleProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10); // Increase progress by 10% on each click (for example)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
            Master Aptitude with Confidence
          </h1>
          <p className="mt-4 text-xl font-light text-gray-400">
            Sharpen your skills with interactive quizzes, video tutorials, and expert tips!
          </p>
        </header>

        {/* Countdown Timer Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Time Remaining</h2>
          <div className="text-2xl font-semibold text-indigo-400">{formatTime(timeLeft)}</div>
        </section>

        {/* Progress Bar Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Quiz Progress</h2>
          <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
            <div
              className="bg-gradient-to-r from-indigo-600 to-pink-600 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button
            onClick={handleProgress}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-all"
          >
            Next Question
          </button>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
            Aptitude Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Logical Reasoning', 'Quantitative Aptitude', 'Verbal Ability', 'Data Interpretation', 'Data Sufficiency', 'Problem Solving'].map((category) => (
              <div
                key={category}
                className="p-8 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-xl shadow-lg text-white text-center hover:scale-105 transform transition-all duration-300"
              >
                <h3 className="text-3xl font-bold">{category}</h3>
                <p className="mt-4 text-lg">Explore more about {category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aptitude Quizzes Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
            Aptitude Quizzes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Logical Reasoning Quiz', 'Quantitative Aptitude Quiz', 'Verbal Ability Quiz'].map((quiz) => (
              <div
                key={quiz}
                className="p-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl shadow-lg text-white text-center hover:scale-105 transform transition-all duration-300"
              >
                <h3 className="text-3xl font-bold">{quiz}</h3>
                <p className="mt-4 text-lg">Test your skills with this quiz!</p>
                <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-all">
                  Start Quiz
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
            Video Tutorials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Logical Reasoning Basics', 'Advanced Quantitative Aptitude', 'Verbal Ability Techniques'].map((video) => (
              <div
                key={video}
                className="p-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl shadow-lg text-white text-center hover:scale-105 transform transition-all duration-300"
              >
                <h3 className="text-3xl font-bold">{video}</h3>
                <p className="mt-4 text-lg">Watch and learn from expert tutorials</p>
                <button className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-full shadow-md hover:bg-teal-700 transition-all">
                  Watch Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
            Featured Resources
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-yellow-500 to-red-500 p-8 rounded-xl text-white">
              <h3 className="text-3xl font-bold">Books</h3>
              <p className="mt-4 text-lg">Explore top-rated aptitude books for in-depth learning.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-xl text-white">
              <h3 className="text-3xl font-bold">Apps</h3>
              <p className="mt-4 text-lg">Recommended apps for practicing aptitude on the go.</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-blue-500 p-8 rounded-xl text-white">
              <h3 className="text-3xl font-bold">Websites</h3>
              <p className="mt-4 text-lg">Check out these websites for daily aptitude practice.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
            What Our Users Say
          </h2>
          <div className="flex justify-center gap-8">
            <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-8 rounded-xl shadow-lg text-white text-center max-w-sm">
              <p>"This course has helped me improve my aptitude skills tremendously! The quizzes are really challenging."</p>
              <div className="mt-4 font-semibold">- User A</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-8 rounded-xl shadow-lg text-white text-center max-w-sm">
              <p>"I love the video tutorials! The explanation is clear and easy to follow."</p>
              <div className="mt-4 font-semibold">- User B</div>
            </div>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
            Enroll Now
          </h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-700 p-8 rounded-xl shadow-xl">
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-600 text-white rounded-lg"
                />
              </div>
              <div className="mb-6">
                <label className="block text-white mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-600 text-white rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all"
              >
                Enroll Now
              </button>
            </form>
          ) : (
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Thank you for enrolling!</h3>
              <p>Your registration was successful. You will receive further instructions soon.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AptitudePage;
