import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Modal from '../utility/Modal'; // Import the Modal component

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    answer: 'Paris'
  },
  {
    id: 2,
    question: 'Who invented JavaScript?',
    options: ['Douglas Crockford', 'Sheryl Sandberg', 'Brendan Eich', 'John Resig'],
    answer: 'Brendan Eich'
  },
  {
    id: 3,
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'None of the above'],
    answer: 'Hyper Text Markup Language'
  },
  {
    id: 4,
    question: 'Which one of the following is not a programming language?',
    options: ['Java', 'Python', 'HTML', 'C++'],
    answer: 'HTML'
  },
  {
    id: 5,
    question: 'Which of the following is used for styling web pages?',
    options: ['HTML', 'CSS', 'Python', 'Java'],
    answer: 'CSS'
  },
  {
    id: 6,
    question: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'],
    answer: 'Cascading Style Sheets'
  },
  {
    id: 7,
    question: 'What programming language is often used for server-side scripting?',
    options: ['Java', 'Python', 'Ruby', 'PHP'],
    answer: 'PHP'
  },
  {
    id: 8,
    question: 'Which of the following is not a database management system?',
    options: ['MySQL', 'SQLite', 'React', 'MongoDB'],
    answer: 'React'
  },
  {
    id: 9,
    question: 'What is the latest version of HTML?',
    options: ['HTML4', 'HTML5', 'XHTML', 'SGML'],
    answer: 'HTML5'
  },
  {
    id: 10,
    question: 'Which of the following is a JavaScript framework?',
    options: ['React', 'Vue', 'Angular', 'All of the above'],
    answer: 'All of the above'
  }
];

const QuizPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleAnswerSelect = (selectedAnswer, questionId) => {
    const updatedAnswers = {
      ...userAnswers,
      [questionId]: selectedAnswer
    };
    setUserAnswers(updatedAnswers);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const submitQuiz = () => {
    setIsModalOpen(true);
  };

  const confirmSubmit = () => {
    console.log(userAnswers);
    setQuizSubmitted(true);
    alert('Thank you for taking the test!');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeThankYouModal = () => {
    setIsThankYouModalOpen(false);
    setQuizSubmitted(true);
  };

  const startIndex = currentPage * 5;
  const endIndex = startIndex + 5;
  const visibleQuestions = questions.slice(startIndex, endIndex);

  if (quizSubmitted) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container mx-auto">
      <div className="mt-28">
        {visibleQuestions.map((question) => (
          <div key={question.id} className="mb-8">
            <h1 className="text-2xl font-bold mb-4">{`${question.id}. ${question.question}`}</h1>
            <div className="space-x-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-2 ${userAnswers[question.id] === option ? 'bg-green-500' : ''}`}
                  onClick={() => handleAnswerSelect(option, question.id)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-between mt-4">
          <button
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md ${currentPage === 0 ? 'invisible' : ''}`}
            onClick={prevPage}
          >
            Previous
          </button>
          <button
            className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md ${endIndex >= questions.length ? 'invisible' : ''}`}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
        {currentPage === Math.ceil(questions.length / 5) - 1 && (
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={submitQuiz}
          >
            Submit
          </button>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmSubmit} />
      <Modal
        isOpen={isThankYouModalOpen}
        title="Thank You"
        message="Thank you for taking the test!"
        onClose={closeThankYouModal}
        onConfirm={closeThankYouModal}
      />
    </div>
  );
};

export default QuizPage;
