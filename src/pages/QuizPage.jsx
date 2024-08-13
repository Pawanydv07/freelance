import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../css/quiz.css";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [markedForReview, setMarkedForReview] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1130);
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/questions/questions')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Questions:', data);
        setQuestions(data);
      })
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion();
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
    setTimeLeft(30);
    if (reviewMode) {
      const nextReviewIndex = markedForReview.indexOf(currentQuestionIndex) + 1;
      if (nextReviewIndex < markedForReview.length) {
        setCurrentQuestionIndex(markedForReview[nextReviewIndex]);
      } else {
        setReviewMode(false);
      }
    } else if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTimeLeft(30);
    }
  };

  const handleMarkForReview = () => {
    if (!markedForReview.includes(currentQuestionIndex)) {
      setMarkedForReview([...markedForReview, currentQuestionIndex]);
    }
    handleNextQuestion();
  };

  const handleReviewQuestions = () => {
    if (markedForReview.length > 0) {
      setReviewMode(true);
      setCurrentQuestionIndex(markedForReview[0]);
      setTimeLeft(30);
    }
  };

  if (questions.length === 0) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (showResult) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-pulse">
          <h2 className="text-3xl font-bold mb-4">Your Score: {score}/{questions.length}</h2>
          <p className="mb-4">Questions marked for review: {markedForReview.length > 0 ? markedForReview.length : 'None'}</p>
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen p-8 mt-4">
      <div className="bg-gray-800 text-white h-16 w-full flex justify-between items-center px-8 mt-4 border-t-2 border-yellow-200 rounded-xl">
        <div className="text-2xl font-bold">Time Left: {timeLeft}s</div>
        <div className="text-xl">Marked for Review: {markedForReview.length}</div>
        <div>
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white px-4 py-2 rounded shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
            onClick={handleMarkForReview}
          >
            Mark for Review
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 ml-4"
            onClick={handleReviewQuestions}
            disabled={markedForReview.length === 0}
          >
            Review Questions
          </button>
        </div>
      </div>
      <div className="w-full max-w-4xl mt-8">
        <AnimatePresence>
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="question-box bg-black text-white p-8 rounded-lg shadow-lg"
          >
            <motion.h2
              key={currentQuestionIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-3xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
            >
              Question {questionNumber}
            </motion.h2>
            <motion.p
              key={currentQuestion.statement}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-xl font-semibold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500"
            >
              {currentQuestion.statement}
            </motion.p>
            <p className="text-lg font-semibold mb-6">{currentQuestion.question}</p>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full px-4 py-2 text-left border rounded-lg ${
                    selectedAnswer === index
                      ? 'bg-blue-600 text-white'
                      : 'text-white hover:text-green-500 hover:bg-gray-800'
                  } shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="neon-button neon-button-primary neon-shadow px-4 py-2 rounded text-white font-bold"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                className="neon-button neon-button-primary neon-shadow px-4 py-2 rounded-lg text-white font-bold"
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
              >
                Next
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;
