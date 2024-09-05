import React from "react";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Welcome, Anuj Gupta</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Summary Boxes */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-3xl">₹0</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Products</h2>
            <p className="text-3xl">10</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Learners</h2>
            <p className="text-3xl">2</p>
          </div>
        </div>

        {/* Sales, Tasks, and Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Sales Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Sales (12 Months)</h2>
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm">Total Sales</p>
                <p className="text-xl">₹0</p>
              </div>
              <div>
                <p className="text-sm">Online Sales</p>
                <p className="text-xl">₹0</p>
              </div>
              <div>
                <p className="text-sm">Direct Sales</p>
                <p className="text-xl">₹0</p>
              </div>
            </div>
            {/* Placeholder for chart */}
            <div className="h-40 bg-gray-200"></div>
          </div>

          {/* Pending Tasks */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Pending Tasks</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm">Support Tickets</p>
                <p>No Pending Task</p>
              </div>
              <div>
                <p className="text-sm">Unanswered Discussions</p>
                <p>No Pending Task</p>
              </div>
              <div>
                <p className="text-sm">Ratings & Reviews</p>
                <p>No Pending Task</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Selling Products */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Top 5 Selling Products</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">AP Physics C Mechanics</td>
                <td className="border px-4 py-2">Course</td>
                <td className="border px-4 py-2">₹0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Digital SAT-Verbal</td>
                <td className="border px-4 py-2">Course</td>
                <td className="border px-4 py-2">₹0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">DSAT</td>
                <td className="border px-4 py-2">Course</td>
                <td className="border px-4 py-2">₹0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">AP Physics C: Electricity and Magnetism</td>
                <td className="border px-4 py-2">Course</td>
                <td className="border px-4 py-2">₹0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">DSAT-Writing</td>
                <td className="border px-4 py-2">Course</td>
                <td className="border px-4 py-2">₹0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
