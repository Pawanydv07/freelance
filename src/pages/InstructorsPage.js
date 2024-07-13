// src/pages/InstructorsPage.js
import React from "react";
// import { instructors } from '../instructorsData';
import InstructorCard from "../components/InstructorCard";
import { instructors } from "../Data/instructorsData";

const InstructorsPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-14">The Curriculum Team</h1>
      <p className="text-center text-gray-600 mb-4">
        With extensive industry experience, the Masai Curriculum Team is a group of expert instructors. All our instructors share 2 things in common, on-the-job learnings and a passion for teaching.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
