import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/questions', {
          params: {
            apiKey: 'uWEkQ1OzZ5bk5V3tAgcczdS6lIz5ol1nPN3vye6M',
            limit: 10,
          },
        });
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerRunning]);

  const handleFinish = () => {
    setShowModal(true);
  };

  const confirmFinish = () => {
    setTimerRunning(false);
    setShowModal(false);
    navigate('/thank-you'); // Navigate to the Thank You page upon confirmation
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-custom p-4 mt-14">
      <div className="bg-customLight rounded-lg shadow-lg w-full max-w-6xl">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">MCT Mock Tests</h2>
            <span>Session 1</span>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-purple-700 h-2.5 rounded-full" style={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}></div>
            </div>
            <div className="ml-4 flex items-center">
              <button className="mr-2 px-2 py-1 bg-gray-200 rounded text-blue-500">Review</button>
              <button className="px-2 py-1 bg-gray-200 rounded text-sm">Mark Review</button>
            </div>
            <div className="ml-4 text-blue-500">{formatTime(secondsElapsed)} Min</div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg mb-4">Question {currentQuestionIndex + 1}</h3>
          <p className="mb-4">{currentQuestion.question}</p>
          <form>
            {Object.keys(currentQuestion.answers).map((key) => {
              const answer = currentQuestion.answers[key];
              if (answer) {
                return (
                  <div key={key} className="mb-4">
                    <input type="radio" id={key} name="answer" className="mr-2" />
                    <label htmlFor={key} className="cursor-pointer">{answer}</label>
                  </div>
                );
              }
              return null;
            })}
          </form>
        </div>
        <div className="p-4 border-t flex justify-between">
          <button
            className="px-4 py-2 bg-blue-500 rounded text-white border-b-2 border-t-2 border-r-2 border-orange-300"
            onClick={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1))}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleFinish}>Finish</button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-red-500 p-8 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Confirm Submission</h2>
            <p className="mb-4">Are you sure you want to finish the test? Once submitted, you cannot make any changes.</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 rounded mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={confirmFinish}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
