import React from 'react';
import quizBackground from '../assets/quizback.jpg';

const QuizPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: `url(${quizBackground})` }}
    >
      <div className="w-full max-w-4xl bg-black bg-opacity-20 backdrop-blur-md shadow-md rounded-lg p-6 border border-white border-opacity-20 mt-14 h-96">
        <h1 className="text-2xl font-bold mb-6">Quiz Title</h1>
        
        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">Question 1: What is React?</p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="question1" className="mr-2" />
              A JavaScript library for building user interfaces
            </label>
            <label className="flex items-center">
              <input type="radio" name="question1" className="mr-2" />
              A CSS framework
            </label>
            <label className="flex items-center">
              <input type="radio" name="question1" className="mr-2" />
              A database
            </label>
            <label className="flex items-center">
              <input type="radio" name="question1" className="mr-2" />
              None of the above
            </label>
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Previous</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
