import React from "react";
import "../../css/Home/HomeP8.css";
// import icons from "../../assets/icons.jpg";
const HomeP8 = () => {
  return (
    <div className="main-container justify-center relative">
      <div className="text-center">
        <h1 className="text-6xl font-bold plan-text">
          Choose <span className="gradient-text">Your Plan</span>
        </h1>
      </div>
      <div className="flex gap-16 justify-center mt-10">
        <div className="choose-1 border-2 border-gray-900">
          <div className="icons-div border-2 border-gray-900"></div>
          <div className="plan-content"></div>
          <div className="plan-button w-full">
            <button className="plan-btn">
              Purchase Plan
            </button>
          </div>
        </div>
        <div className="choose-1 border-2 border-gray-900">
        <div className="icons-div border-2 border-gray-900"></div>
          <div className="plan-content"></div>
          <div className="plan-button w-full">
            <button className="plan-btn">
              Purchase Plan
            </button>
          </div>
        </div>
        <div className="choose-1 border-2 border-gray-900">
        <div className="icons-div border-2 border-gray-900"></div>
          <div className="plan-content"></div>
          <div className="plan-button w-full">
            <button className="plan-btn">
              Purchase Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeP8;