import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FreshAiPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mt-[65px]">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold">DSAT AI Hub</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-white shadow-md w-64 p-6 hidden lg:block">
          <div className="text-center">
            <img
              src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500 mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">Aarav Kumar</h2>
            <p className="text-gray-600 text-sm">Rank: 3rd | XP: 2,500</p>
          </div>
          
          {/* User Stats */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">Level: 5</p>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8">
            <h3 className="text-gray-700 font-bold text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/chat" className="block px-4 py-2 rounded-md hover:bg-indigo-100">Start New Chat</Link>
              </li>
              <li>
                <Link to="/progress" className="block px-4 py-2 rounded-md hover:bg-indigo-100">My Progress</Link>
              </li>
              <li>
                <Link to="/achievements" className="block px-4 py-2 rounded-md hover:bg-indigo-100">Achievements</Link>
              </li>
              <li>
                <Link to="/settings" className="block px-4 py-2 rounded-md hover:bg-indigo-100">Settings</Link>
              </li>
            </ul>
          </div>

          {/* Collapsible Links */}
          <div className="mt-8">
            <div onClick={() => setIsCollapsed(!isCollapsed)} className="cursor-pointer text-gray-700 font-bold">
              {isCollapsed ? 'Show Links' : 'Hide Links'}
            </div>
            {!isCollapsed && (
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/chat" className="block px-4 py-2 rounded-md hover:bg-indigo-100">Start New Chat</Link>
                </li>
                <li>
                  <Link to="/progress" className="block px-4 py-2 rounded-md hover:bg-indigo-100">My Progress</Link>
                </li>
                <li>
                  <Link to="/achievements" className="block px-4 py-2 rounded-md hover:bg-indigo-100">Achievements</Link>
                </li>
                <li>
                  <Link to="/settings" className="block px-4 py-2 rounded-md hover:bg-indigo-100">Settings</Link>
                </li>
              </ul>
            )}
          </div>

          {/* AI Insights */}
          <div className="mt-8 p-4 bg-indigo-50 rounded-md shadow-md">
            <h3 className="text-indigo-600 font-bold">AI Tip of the Day</h3>
            <p className="text-gray-700 text-sm">"Did you know? Learning through quizzes improves retention by 25%!"</p>
          </div>

          {/* Notifications */}
          <div className="mt-8 bg-indigo-100 rounded-lg p-4">
            <h3 className="text-indigo-600 font-bold">Notifications</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 text-sm">New Challenge Available!</li>
              <li className="text-gray-700 text-sm">You’ve earned a new badge: “Master Learner”</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="mt-8 text-center">
            <h3 className="text-gray-700 font-bold text-sm uppercase">Connect</h3>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={24} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
              <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={24} /></a>
            </div>
          </div>
        </aside>

        {/* Main Section */}
        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Tailored Learning Modes</h2>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              'Reading & Writing', 
              'General Information', 
              'Text Adventure', 
              'Vocabulary Quizzer', 
              'Mathematics', 
              'Favorite Character', 
              'Language', 
              'Learn With Analogies', 
              'Personalization'
            ].map((mode, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start hover:shadow-xl transition-transform transform hover:scale-105">
                <h3 className="text-lg font-bold text-indigo-700">{mode}</h3>
                <p className="text-gray-600 text-sm mt-2">Enhance your skills with {mode.toLowerCase()}.</p>
                <Link to={`/chat/${mode.toLowerCase().replace(/ /g, '-')}`} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all">
                  Start Now
                </Link>
              </div>
            ))}
          </div>

          {/* Today's Challenge */}
          <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Today's Challenge</h3>
            <p className="mt-2">Complete 2 tasks today to earn extra points!</p>
            <button className="mt-4 bg-white text-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-200 transition-all">
              Accept Challenge
            </button>
          </div>

          {/* Upcoming Events */}
          <div className="mt-12 bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Upcoming Events</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">Webinar on AI Learning - Dec 1st</li>
              <li className="text-sm">Hackathon for AI Solutions - Dec 10th</li>
              <li className="text-sm">Quiz Competition - Dec 15th</li>
            </ul>
          </div>

          {/* Recent Achievements */}
          <div className="mt-12 bg-gradient-to-r from-purple-400 to-indigo-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Recent Achievements</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">Achieved Level 5 - Nov 23rd</li>
              <li className="text-sm">Earned "Master Learner" Badge - Nov 20th</li>
              <li className="text-sm">Completed 100 Tasks - Nov 18th</li>
            </ul>
          </div>

          {/* Daily Tips */}
          <div className="mt-12 bg-indigo-100 text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Daily Tips</h3>
            <p className="mt-4">"Stay consistent! Small daily progress leads to big results."</p>
          </div>

          {/* Leaderboard */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800">Leaderboard</h3>
            <div className="bg-white shadow-md rounded-lg p-6 mt-4">
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">Aarav Kumar</span>
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">500 Points</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">Priya Sharma</span>
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">450 Points</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">Sanya Gupta</span>
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">400 Points</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 DSAT AI | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default FreshAiPage;
