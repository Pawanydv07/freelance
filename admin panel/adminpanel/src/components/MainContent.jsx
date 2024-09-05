import React from 'react';

const MainContent = () => {
  return (
    <div className="flex-1 p-10">
      <h1 className="text-2xl font-bold">Welcome, User Name</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <p>Total Sales</p>
          <h2 className="text-3xl font-bold">₹0</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p>Products</p>
          <h2 className="text-3xl font-bold">10</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p>Learners</p>
          <h2 className="text-3xl font-bold">2</h2>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
