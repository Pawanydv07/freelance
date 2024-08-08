// ThankYouPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const [feedback, setFeedback] = useState({
    questionQuality: null,
    clarityOfAnswers: null,
    ui: null,
    timeManagement: null,
    overallExperience: null,
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFeedbackChange = (event, feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: event.target.value,
    }));
  };

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', feedback);
    // Optionally, you can send the feedback to a server here
    setShowModal(true); // Show the modal after feedback submission
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGenerateMoreQuestions = () => {
    navigate('/generate-questions');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
      <div className="bg-white text-gray-800 rounded-lg shadow-md p-8 max-w-6xl mt-10 w-full text-center">
        <div className="bg-green-500 p-4 rounded-full inline-block mb-4">
          <span className="text-white text-6xl">👍</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
        <p className="text-lg mb-4">Test completed successfully.</p>
        <p className="text-sm text-gray-600 mb-8">
          We appreciate your participation. Please provide your feedback below:
        </p>
        
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Question Quality (1 to 5):</label>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="questionQuality"
                  value={value}
                  className="form-radio text-green-500"
                  onChange={(e) => handleFeedbackChange(e, 'questionQuality')}
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">Clarity of Question Answers (1 to 5):</label>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="clarityOfAnswers"
                  value={value}
                  className="form-radio text-green-500"
                  onChange={(e) => handleFeedbackChange(e, 'clarityOfAnswers')}
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">UI Experience (1 to 5):</label>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="ui"
                  value={value}
                  className="form-radio text-green-500"
                  onChange={(e) => handleFeedbackChange(e, 'ui')}
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">Time Management (1 to 5):</label>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="timeManagement"
                  value={value}
                  className="form-radio text-green-500"
                  onChange={(e) => handleFeedbackChange(e, 'timeManagement')}
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block mb-2 font-semibold">Overall Experience (1 to 5):</label>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="overallExperience"
                  value={value}
                  className="form-radio text-green-500"
                  onChange={(e) => handleFeedbackChange(e, 'overallExperience')}
                />
                <span className="ml-2">{value}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded font-semibold"
          onClick={handleSubmitFeedback}
        >
          Submit Feedback
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 text-center max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Thank you for your feedback!</h2>
            <p className="mb-6">What would you like to do next?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleGoHome}
              >
                Go to Home
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleGenerateMoreQuestions}
              >
                Generate More Questions
              </button>
            </div>
            <button
              className="mt-4 px-4 py-2 text-gray-600"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThankYouPage;
