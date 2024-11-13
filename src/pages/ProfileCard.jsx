import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import indiamap from "../assets/indiamap.png";
const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  const data = {
    testName: "iCAT MOCK 9",
    attemptedOn: "Monday, September 9, 2024",
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4 space-y-4 md:space-y-0 md:space-x-6 mt-12">
      {/* Left Section */}
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-2 min-h-screen">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-blue-600 mb-1">
            Hey {user ? user.displayName : "User"},
          </h1>
          <p className="text-lg font-semibold text-gray-800">
            This is your mock analysis for{" "}
            <span className="font-bold">{data.testName}</span>.
          </p>
          <p className="text-sm text-gray-500">
            Attempted On:{" "}
            <span className="text-blue-600 underline">{data.attemptedOn}</span>
          </p>
        </div>

        <button className="bg-gray-800 hover:bg-gray-900 text-white w-full py-2 rounded-full mb-4 transition-colors duration-200 text-sm font-semibold">
          Score vs Percentile
        </button>

        {/* Analysis Options */}
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <span className="text-2xl text-blue-500">🔍</span>
            <Link to="/aipage" className="text-gray-700 font-medium">
              Analyse your mock with solution
            </Link>
            <span className="text-blue-500 text-lg">→</span>
          </div>

          <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <span className="text-2xl text-blue-500">🔄</span>
            <p className="text-gray-700 font-medium">
              Then track your errors here
            </p>
            <span className="text-blue-500 text-lg">→</span>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <span className="text-2xl text-yellow-500">🏫</span>
            <p className="text-gray-700 font-medium">
              Check your cracked{" "}
              <span className="text-yellow-500 font-semibold">B-Schools</span>{" "}
              based on your current mock result & strategies to crack them.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 mt-4">
        {/* Score Card */}
        {/* Score Card */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center flex items-center justify-center flex-col h-full">
          {/* Circular Progress */}
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-blue-600 to-blue-400 mb-4">
            {/* Inner Circle */}
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <span className="text-blue-600 font-semibold text-lg">96.5</span>
            </div>
          </div>

          <p className="text-lg font-semibold text-gray-800">72</p>
          <p className="text-sm text-gray-500">Your Score</p>

          {/* Additional Details */}
          <div className="mt-2 text-gray-600 text-sm">
            <p>
              Result Percentile:{" "}
              <span className="font-semibold text-blue-600">96.5</span>
            </p>
            <p>
              Your Accuracy:{" "}
              <span className="font-semibold text-blue-600">60</span>
            </p>
            <p>
              Negative Marks:{" "}
              <span className="font-semibold text-blue-600">18</span>
            </p>
          </div>
        </div>

        {/* All India Rank Card */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center mt-8 relative overflow-hidden h-full">
          {/* Background India Map */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center opacity-20"
            style={{
              backgroundImage: `url(${indiamap})`,
              backgroundSize: "60%",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Rank Information Overlay */}
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-sm font-semibold text-gray-600 mb-1">
              All India Rank
            </p>
            <p className="text-4xl font-bold text-orange-600">414</p>
          </div>
        </div>

        {/* Marks Breakdown Card */}
        <div className="col-span-2 bg-white shadow-lg rounded-lg p-4 text-center grid grid-cols-4 gap-4">
          <div>
            <p className="text-lg font-semibold text-gray-600">150</p>
            <p className="text-sm text-gray-500">Potential Marks</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-red-600">18</p>
            <p className="text-sm text-gray-500">Negative Marks</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-blue-600">60</p>
            <p className="text-sm text-gray-500">Your Accuracy</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-green-600">36.36%</p>
            <p className="text-sm text-gray-500">Overall Percentage</p>
          </div>
        </div>

        {/* Section-wise Scores */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center flex items-center justify-center flex-col">
          {/* Circular Progress for VARC */}
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-blue-600 to-blue-400 mb-4">
            {/* Inner Circle for VARC */}
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <span className="text-blue-600 font-semibold text-lg">99.9</span>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-800">VARC</p>
          <p className="text-sm text-gray-500">Your Score: 49</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center flex items-center justify-center flex-col">
          {/* Circular Progress for LRDI */}
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-blue-600 to-blue-400 mb-4">
            {/* Inner Circle for LRDI */}
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <span className="text-blue-600 font-semibold text-lg">75</span>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-800">LRDI</p>
          <p className="text-sm text-gray-500">Your Score: 11</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center flex items-center justify-center flex-col">
          {/* Circular Progress for Quant */}
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-blue-600 to-blue-400 mb-4">
            {/* Inner Circle for Quant */}
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <span className="text-blue-600 font-semibold text-lg">85</span>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-800">Quant</p>
          <p className="text-sm text-gray-500">Your Score: 12</p>
        </div>
        {/* Community Posting Card */}
        <div className="col-span-2 bg-white shadow-lg rounded-lg p-4 text-center">
          <p className="text-lg font-medium text-gray-700 mb-2">
            Post your score on LogicalSir Community.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            LogicalSir has India's biggest CAT community with 400,000 people in
            it.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold">
            Post Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
