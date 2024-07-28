import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600 p-4 mt-14">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
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
              <button className="mr-2 px-2 py-1 bg-gray-200 rounded">Review</button>
              <button className="px-2 py-1 bg-gray-200 rounded">Mark as review</button>
            </div>
            <div className="ml-4">00:00 Min</div>
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
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-purple-700 text-white rounded"
            onClick={() => setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1))}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
          <button className="px-4 py-2 bg-purple-700 text-white rounded">Finish</button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
