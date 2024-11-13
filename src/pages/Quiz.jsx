import React, { useEffect, useState } from 'react';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [markedForReview, setMarkedForReview] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // Example: 30 mins
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/questions/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResult(true); // Auto-show result when time is up
    }
  }, [timeLeft]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleMarkForReview = () => {
    if (!markedForReview.includes(currentQuestionIndex)) {
      setMarkedForReview([...markedForReview, currentQuestionIndex]);
    }
  };

  const handleSelectQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (questions.length === 0) {
    return <div className="text-center text-xl font-bold">Loading...</div>;
  }

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Your Score: {score}/{questions.length}</h2>
        <p className="mt-4">Questions marked for review: {markedForReview.length}</p>
        <button
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white px-8 py-4 flex justify-between items-center">
        <div className="text-lg">Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}s</div>
        <button className="bg-red-500 px-4 py-2 rounded">Pause Test</button>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow justify-center items-start px-4 py-8">
        {/* Left: Question and Answers */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-2/3">
          <h2 className="text-xl font-bold mb-4">Question {currentQuestionIndex + 1}</h2>
          <p className="mb-6">{questions[currentQuestionIndex].statement}</p>

          <div className="space-y-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`block w-full text-left p-3 border-2 rounded-lg ${selectedAnswer === index ? 'border-blue-500 bg-blue-100' : 'border-gray-200'}`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePreviousQuestion}
              className="bg-gray-300 px-4 py-2 rounded-lg"
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button onClick={handleMarkForReview} className="bg-yellow-400 px-4 py-2 rounded-lg">
              Mark for Review
            </button>
            <button
              onClick={handleNextQuestion}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              disabled={selectedAnswer === null}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right: Question Navigator */}
        <div className="ml-8 bg-white shadow-lg rounded-lg p-6 w-1/3">
          <h3 className="text-lg font-bold mb-4">Questions</h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSelectQuestion(index)}
                className={`px-4 py-2 rounded-lg ${currentQuestionIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
