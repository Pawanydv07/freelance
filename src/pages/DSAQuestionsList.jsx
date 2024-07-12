import React from 'react';

const questions = [
  {
    status: '✅',
    title: '1. Two Sum',
    solution: '📄',
    acceptance: '53.0%',
    difficulty: 'Easy',
    frequency: '🔒'
  },
  {
    status: '✅',
    title: '2. Add Two Numbers',
    solution: '📄',
    acceptance: '43.3%',
    difficulty: 'Medium',
    frequency: '🔒'
  },
  // Add more questions as needed
];

const DSAQuestionsList = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Lists</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Difficulty</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Status</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Tags</button>
        </div>
        <input type="text" placeholder="Search questions" className="px-4 py-2 border rounded-lg" />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Solution</th>
            <th className="px-4 py-2">Acceptance</th>
            <th className="px-4 py-2">Difficulty</th>
            <th className="px-4 py-2">Frequency</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{question.status}</td>
              <td className="px-4 py-2">{question.title}</td>
              <td className="px-4 py-2">{question.solution}</td>
              <td className="px-4 py-2">{question.acceptance}</td>
              <td className="px-4 py-2">{question.difficulty}</td>
              <td className="px-4 py-2">{question.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DSAQuestionsList;
