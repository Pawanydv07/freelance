import React, { useEffect, useState } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/questions/questions')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Questions:', data); // Log the fetched data
        setQuestions(data);
      })
      .catch(error => console.error('Error fetching questions:', error));
  }, []);
  
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

  if (questions.length === 0) {
    return <div className="text-center">Loading...</div>;
  }

  if (showResult) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Your Score: {score}/{questions.length}</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full px-4 py-2 text-left border rounded ${
                selectedAnswer === index ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
