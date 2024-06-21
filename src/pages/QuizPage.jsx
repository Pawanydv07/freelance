import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Modal from '../utility/Modal'; // Import the Modal component
const questions = [
    // Existing questions
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
    },
    // Additional 50 advanced JavaScript questions
    {
      id: 11,
      question: 'What will the following code output?\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'false'
    },
    {
      id: 12,
      question: 'What is the output of the following code?\n```js\n(function() {\n  var a = b = 3;\n})();\nconsole.log(typeof a);\nconsole.log(typeof b);\n```',
      options: ['undefined, number', 'number, undefined', 'number, number', 'undefined, undefined'],
      answer: 'undefined, number'
    },
    {
      id: 13,
      question: 'How can you copy an array in JavaScript?\n```js\nvar arr = [1, 2, 3, 4];\nvar copy;\n// Select the correct option to copy array arr\n```',
      options: ['copy = arr', 'copy = arr.slice()', 'copy = [...arr]', 'copy = arr.map()'],
      answer: 'copy = [...arr]'
    },
    {
      id: 14,
      question: 'What will be the output of the following code?\n```js\nconsole.log([] + []);\n```',
      options: ['[]', '""', 'undefined', 'TypeError'],
      answer: '""'
    },
    {
      id: 15,
      question: 'What will be the output of the following code?\n```js\nconsole.log([] + {});\n```',
      options: ['[object Object]', '""', 'undefined', 'TypeError'],
      answer: '[object Object]'
    },
    {
      id: 16,
      question: 'What will be the output of the following code?\n```js\nconsole.log({} + []);\n```',
      options: ['[object Object]', '""', 'undefined', 'TypeError'],
      answer: '""'
    },
    {
      id: 17,
      question: 'What will be the output of the following code?\n```js\nconsole.log(typeof NaN);\n```',
      options: ['number', 'undefined', 'NaN', 'object'],
      answer: 'number'
    },
    {
      id: 18,
      question: 'What does the following code do?\n```js\nlet x = (1, 2, 3);\nconsole.log(x);\n```',
      options: ['1', '2', '3', 'undefined'],
      answer: '3'
    },
    {
      id: 19,
      question: 'What will the following code output?\n```js\nconsole.log(1 + "2" + "2");\n```',
      options: ['122', '14', 'NaN', '3'],
      answer: '122'
    },
    {
      id: 20,
      question: 'What will the following code output?\n```js\nconsole.log(1 + +"2" + "2");\n```',
      options: ['32', '14', 'NaN', '122'],
      answer: '32'
    },
    {
      id: 21,
      question: 'What will the following code output?\n```js\nconsole.log("A" - "B" + "2");\n```',
      options: ['NaN2', 'NaN', 'undefined', 'TypeError'],
      answer: 'NaN2'
    },
    {
      id: 22,
      question: 'What will the following code output?\n```js\nconsole.log("A" - "B" + 2);\n```',
      options: ['NaN2', 'NaN', '2', 'undefined'],
      answer: 'NaN'
    },
    {
      id: 23,
      question: 'Which of the following methods can be used to check if a number is an integer?',
      options: ['Number.isInteger()', 'Number.isSafeInteger()', 'Number.isFinite()', 'Number.isNaN()'],
      answer: 'Number.isInteger()'
    },
    {
      id: 24,
      question: 'What will be the output of the following code?\n```js\nconsole.log(0.1 + 0.2);\n```',
      options: ['0.3', '0.30000000000000004', '0.3000000000000001', '0.29999999999999993'],
      answer: '0.30000000000000004'
    },
    {
      id: 25,
      question: 'What will be the output of the following code?\n```js\nconsole.log(Math.max());\n```',
      options: ['-Infinity', 'Infinity', '0', 'NaN'],
      answer: '-Infinity'
    },
    {
      id: 26,
      question: 'What will be the output of the following code?\n```js\nconsole.log(Math.min());\n```',
      options: ['Infinity', '-Infinity', '0', 'NaN'],
      answer: 'Infinity'
    },
    {
      id: 27,
      question: 'What will be the output of the following code?\n```js\nconsole.log(typeof null);\n```',
      options: ['null', 'undefined', 'object', 'string'],
      answer: 'object'
    },
    {
      id: 28,
      question: 'What will be the output of the following code?\n```js\nconsole.log(typeof undefined);\n```',
      options: ['undefined', 'object', 'null', 'string'],
      answer: 'undefined'
    },
    {
      id: 29,
      question: 'What will be the output of the following code?\n```js\nlet x = 1 == true;\nconsole.log(x);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'true'
    },
    {
      id: 30,
      question: 'What will be the output of the following code?\n```js\nlet x = 1 === true;\nconsole.log(x);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'false'
    },
    {
      id: 31,
      question: 'What will be the output of the following code?\n```js\nlet x = 0 == false;\nconsole.log(x);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'true'
    },
    {
      id: 32,
      question: 'What will be the output of the following code?\n```js\nlet x = 0 === false;\nconsole.log(x);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'false'
    },
    {
      id: 33,
      question: 'What will be the output of the following code?\n```js\nconsole.log([] == false);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'true'
    },
    {
      id: 34,
      question: 'What will be the output of the following code?\n```js\nconsole.log([] === false);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'false'
    },
    {
      id: 35,
      question: 'What will be the output of the following code?\n```js\nconsole.log({} == false);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'false'
    },
    {
      id: 36,
      question: 'What will be the output of the following code?\n```js\nconsole.log({} === false);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'false'
    },
    {
      id: 37,
      question: 'What will be the output of the following code?\n```js\nconsole.log(null == false);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'false'
    },
    {
      id: 38,
      question: 'What will be the output of the following code?\n```js\nconsole.log(null === false);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'false'
    },
    {
      id: 39,
      question: 'What will be the output of the following code?\n```js\nconsole.log(null == undefined);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'true'
    },
    {
      id: 40,
      question: 'What will be the output of the following code?\n```js\nconsole.log(null === undefined);\n```',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 'false'
    },
    {
      id: 41,
      question: 'What will be the output of the following code?\n```js\nlet x = (function() { return this; }).call(null);\nconsole.log(x);\n```',
      options: ['null', 'undefined', 'window', 'global'],
      answer: 'global'
    },
    {
      id: 42,
      question: 'What will be the output of the following code?\n```js\nlet x = (function() { return this; }).call(undefined);\nconsole.log(x);\n```',
      options: ['undefined', 'window', 'global', 'null'],
      answer: 'global'
    },
    {
      id: 43,
      question: 'What will be the output of the following code?\n```js\nlet x = (() => this).call(null);\nconsole.log(x);\n```',
      options: ['null', 'undefined', 'window', 'global'],
      answer: 'undefined'
    },
    {
      id: 44,
      question: 'What will be the output of the following code?\n```js\nlet x = (() => this).call(undefined);\nconsole.log(x);\n```',
      options: ['undefined', 'window', 'global', 'null'],
      answer: 'undefined'
    },
    {
      id: 45,
      question: 'What will be the output of the following code?\n```js\nlet x = (function() { "use strict"; return this; }).call(null);\nconsole.log(x);\n```',
      options: ['null', 'undefined', 'window', 'global'],
      answer: 'null'
    },
    {
      id: 46,
      question: 'What will be the output of the following code?\n```js\nlet x = (function() { "use strict"; return this; }).call(undefined);\nconsole.log(x);\n```',
      options: ['undefined', 'window', 'global', 'null'],
      answer: 'undefined'
    },
    {
      id: 47,
      question: 'What will be the output of the following code?\n```js\nlet x = (function() { return this; }).apply(null);\nconsole.log(x);\n```',
      options: ['null', 'undefined', 'window', 'global'],
      answer: 'global'
    },
    {
      id: 48,
      question: 'What will be the output of the following code?\n```js\nlet x = (function() { return this; }).apply(undefined);\nconsole.log(x);\n```',
      options: ['undefined', 'window', 'global', 'null'],
      answer: 'global'
    },
    {
      id: 49,
      question: 'What will be the output of the following code?\n```js\nlet x = (function() { "use strict"; return this; }).apply(null);\nconsole.log(x);\n```',
      options: ['null', 'undefined', 'window', 'global'],
      answer: 'null'
    },
    {
      id: 50,
      question: 'What will be the output of the following code?\n```js\nlet x = (function() { "use strict"; return this; }).apply(undefined);\nconsole.log(x);\n```',
      options: ['undefined', 'window', 'global', 'null'],
      answer: 'undefined'
    },
    {
      id: 51,
      question: 'What will be the output of the following code?\n```js\nconsole.log(2 + "2" - "2");\n```',
      options: ['2', '22', 'NaN', '0'],
      answer: '20'
    },
    {
      id: 52,
      question: 'What will be the output of the following code?\n```js\nconsole.log([] + null + 1);\n```',
      options: ['null1', 'undefined', 'TypeError', 'NaN'],
      answer: 'null1'
    },
    {
      id: 53,
      question: 'What will be the output of the following code?\n```js\nconsole.log([] + []);\n```',
      options: ['[]', '""', 'undefined', 'TypeError'],
      answer: '""'
    },
    {
      id: 54,
      question: 'What will be the output of the following code?\n```js\nconsole.log({} + []);\n```',
      options: ['[object Object]', '""', 'undefined', 'TypeError'],
      answer: '""'
    },
    {
      id: 55,
      question: 'What will be the output of the following code?\n```js\nconsole.log([] + {});\n```',
      options: ['[object Object]', '""', 'undefined', 'TypeError'],
      answer: '[object Object]'
    },
    {
      id: 56,
      question: 'What will be the output of the following code?\n```js\nconsole.log(typeof NaN);\n```',
      options: ['number', 'undefined', 'NaN', 'object'],
      answer: 'number'
    },
    {
      id: 57,
      question: 'What will be the output of the following code?\n```js\nlet x = (1, 2, 3);\nconsole.log(x);\n```',
      options: ['1', '2', '3', 'undefined'],
      answer: '3'
    },
    {
      id: 58,
      question: 'What will be the output of the following code?\n```js\nconsole.log(1 + "2" + "2");\n```',
      options: ['122', '14', 'NaN', '3'],
      answer: '122'
    },
    {
      id: 59,
      question: 'What will be the output of the following code?\n```js\nconsole.log(1 + +"2" + "2");\n```',
      options: ['32', '14', 'NaN', '122'],
      answer: '32'
    },
    {
      id: 60,
      question: 'What will be the output of the following code?\n```js\nconsole.log("A" - "B" + "2");\n```',
      options: ['NaN2', 'NaN', 'undefined', 'TypeError'],
      answer: 'NaN2'
    },
     
      {
        id: 61,
        question: 'What is the binary representation of the decimal number 10?',
        options: ['1010', '1001', '1100', '1011'],
        answer: '1010'
      },
      {
        id: 62,
        question: 'What is the decimal equivalent of the binary number 1101?',
        options: ['11', '12', '13', '14'],
        answer: '13'
      },
      {
        id: 63,
        question: 'Which operation is used to set a specific bit to 1 in binary manipulation?',
        options: ['AND', 'OR', 'XOR', 'NOT'],
        answer: 'OR'
      },
      {
        id: 64,
        question: 'What is the result of the binary AND operation between 1010 and 1100?',
        options: ['1000', '1010', '1100', '1110'],
        answer: '1000'
      },
      {
        id: 65,
        question: 'What is the binary representation of the decimal number 255?',
        options: ['11110000', '11111111', '11101110', '11111011'],
        answer: '11111111'
      },
      {
        id: 66,
        question: 'How many bits are there in a byte?',
        options: ['4', '8', '16', '32'],
        answer: '8'
      },
      {
        id: 67,
        question: 'Which of the following is a correct method to flip all bits in a binary number?',
        options: ['XOR with 0', 'XOR with 1', 'AND with 1', 'OR with 1'],
        answer: 'XOR with 1'
      },
      {
        id: 68,
        question: 'What is the result of the binary OR operation between 1010 and 0110?',
        options: ['1100', '1110', '1010', '0110'],
        answer: '1110'
      },
      {
        id: 69,
        question: 'Which binary operation would you use to check if a particular bit is 1?',
        options: ['AND', 'OR', 'XOR', 'NOT'],
        answer: 'AND'
      },
      {
        id: 70,
        question: 'What is the 2\'s complement of the binary number 0101?',
        options: ['1010', '1101', '1011', '1001'],
        answer: '1011'
      }
];


const QuizPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false); // For warning modal
  const [timer, setTimer] = useState(60); // Initial timer value in seconds
  const [tabSwitchCount, setTabSwitchCount] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 1) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          handleTimeOut();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentPage]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount(prevCount => prevCount + 1);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (tabSwitchCount === 1) {
      setIsWarningModalOpen(true);
    } else if (tabSwitchCount > 1) {
      submitQuizDirectly('Quiz submitted due to multiple tab switches.');
    }
  }, [tabSwitchCount]);

  const handleAnswerSelect = (selectedAnswer, questionId) => {
    const updatedAnswers = {
      ...userAnswers,
      [questionId]: selectedAnswer
    };
    setUserAnswers(updatedAnswers);
  };

  const handleTimeOut = () => {
    if (currentPage < Math.ceil(questions.length / 5) - 1) {
      nextPage();
    } else {
      submitQuiz();
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setTimer(60); // Reset timer for the next page
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setTimer(60); // Reset timer for the previous page
  };

  const submitQuiz = (reason) => {
    setIsModalOpen(true);
    if (reason) {
      alert(reason);
    }
  };

  const submitQuizDirectly = (reason) => {
    console.log(userAnswers);
    setQuizSubmitted(true);
    if (reason) {
      alert(reason);
    }
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

  const closeWarningModal = () => {
    setIsWarningModalOpen(false);
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
        <div className="text-right mb-4">
          <span className="text-xl font-bold">Time Left: {timer} seconds</span>
        </div>
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
      <Modal
        isOpen={isWarningModalOpen}
        title="Warning"
        message="Switching tabs will cause the quiz to be submitted automatically."
        onClose={closeWarningModal}
        onConfirm={closeWarningModal}
      />
    </div>
  );
};

export default QuizPage;
