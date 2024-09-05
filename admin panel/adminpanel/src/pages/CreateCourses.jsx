import React, { useState } from 'react';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [lessons, setLessons] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [days, setDays] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {
      title,
      lessons,
      duration,
      price,
      days,
    };

    console.log('New Course Data:', newCourse);

    // Logic to save the new course, e.g., API call or updating state
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Number of Lessons</label>
          <input
            type="number"
            value={lessons}
            onChange={(e) => setLessons(e.target.value)}
            placeholder="Enter number of lessons"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter course duration"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter course price"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Number of Days</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="Enter number of days"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
