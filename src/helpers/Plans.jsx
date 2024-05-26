import React from "react";
import "../css/plans.css";

const Plans = () => {
  return (
    <div className="main-container justify-center mt-20 bg-orange-200 relative">
      <div className="text-center">
        <h1 className="text-6xl font-bold plan-text">
          Choose <span className="gradient-text">Your Plan</span>
        </h1>
      </div>
      <div className="flex gap-16 justify-center">
        <div className="choose-1 border-2 border-gray-900"></div>
        <div className="choose-1 border-2 border-gray-900"></div>
        <div className="choose-1 border-2 border-gray-900"></div>
      </div>
    </div>
  );
};

export default Plans;