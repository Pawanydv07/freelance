import React, { useState } from 'react';

const QuestionGeneratorPage = () => {
  const [prompt, setPrompt] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleGenerateQuestions = () => {
    // Replace with the actual logic to generate questions
    const generatedQuestions = [
      `What is the importance of ${prompt}?`,
      `How does ${prompt} affect daily life?`,
      `What are the benefits of ${prompt}?`,
      `Can you explain the concept of ${prompt}?`,
    ];
    setQuestions(generatedQuestions);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#000428] to-[#004e92] p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Question Generator</h1>
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-gray-700 font-semibold mb-2">
            Enter your prompt:
          </label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={handleGenerateQuestions}
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Generate Questions
        </button>
        <div className="mt-6">
          {questions.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-2">Generated Questions:</h2>
              <ul className="list-disc pl-5 space-y-2">
                {questions.map((question, index) => (
                  <li key={index} className="text-gray-700">
                    {question}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionGeneratorPage;
