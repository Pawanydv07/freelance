import React from 'react';

const FullScreenModal = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <h1 className="text-white text-4xl">Starting the Quiz...</h1>
    </div>
  );
};

export default FullScreenModal;
