import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirm Submission</h2>
        <p className="mb-4">Are you sure you want to submit the quiz? Have you answered all the questions?</p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={onConfirm}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
