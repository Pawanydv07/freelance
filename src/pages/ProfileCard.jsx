import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { Pie, Line, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  RadarController,
  RadialLinearScale,
} from "chart.js";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  RadarController,
  RadialLinearScale
);

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  // Mock data
  const testName = "iCAT MOCK 9";
  const attemptedOn = "Monday, September 9, 2024";

  // Charts data
  const pieChartData = {
    labels: ["Attempted", "Not Attempted"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const rankComparisonData = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
    datasets: [
      {
        label: "Your Rank",
        data: [12, 15, 10, 8, 7],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        fill: true,
      },
      {
        label: "Average Rank",
        data: [10, 11, 9, 6, 5],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 1)",
        fill: true,
      },
    ],
  };

  const aptitudeSectionData = {
    labels: [
      "Reasoning",
      "Mathematics",
      "English",
      "Data Interpretation",
      "Quantitative Aptitude",
      "Logical Ability",
    ],
    datasets: [
      {
        label: "Your Performance",
        data: [75, 85, 70, 60, 90, 80],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
      {
        label: "Top Students",
        data: [90, 95, 85, 88, 98, 92],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  const getRandomVariation = (baseValue) => {
    // Random variation between -5 and +5 points around the base value
    return baseValue + (Math.random() * 10 - 5);
  };

  const yourScores = [65, 70, 75, 80, 85].map((score) =>
    getRandomVariation(score)
  );

  const overallAverageScores = [60, 65, 70, 75, 80].map((score) =>
    getRandomVariation(score)
  );

  const performanceTrends = {
    labels: ["Test-1", "Test-2", "Test-3", "Test-4", "Test-5"],
    datasets: [
      {
        label: "Your Score",
        data: yourScores, // Updated with some randomness
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: true,
        tension: 0.3, // Adds a smooth curve to the line
      },
      {
        label: "Overall Students' Average",
        data: overallAverageScores, // Updated with some randomness
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
        fill: true,
        tension: 0.3, // Adds a smooth curve to the line
      },
    ],
  };

  const leaderboard = [
    { name: "Arjun", rank: 10, score: 58 },
    { name: "Karan", rank: 2, score: 96 },
    { name: "Shayam", rank: 4, score: 86 },
    { name: "Ram", rank: 5, score: 76 },
    { name: "Aditya", rank: 1, score: 99 },
    { name: "Prem", rank: 6, score: 57 },
    { name: "You", rank: 7, score: 35 },
  ];

  const badges = ["10 Mock Tests Completed", "Top 5% in Quantitative Aptitude"];
  const activities = [
    "Attempted iCAT Mock 9 - Sept 9, 2024",
    "Reviewed Mock 8 Solutions - Sept 5, 2024",
    "Started Quantitative Aptitude Course - Aug 30, 2024",
  ];

  const socialMediaLinks = [
    { icon: faLinkedin, label: "LinkedIn", link: "https://www.linkedin.com" },
    { icon: faFacebook, label: "Facebook", link: "https://www.facebook.com" },
    {
      icon: faInstagram,
      label: "Instagram",
      link: "https://www.instagram.com",
    },
    { icon: faTwitter, label: "Twitter", link: "https://www.twitter.com" },
  ];

  // Additional sections for Notes and Upcoming Tests
  const recentTests = [
    { name: "iCAT Mock 8", date: "Aug 30, 2024", score: 78 },
    { name: "iCAT Mock 7", date: "Aug 25, 2024", score: 85 },
  ];

  const upcomingTests = [
    { name: "iCAT Mock 10", date: "Oct 1, 2024", time: "10:00 AM" },
    { name: "iCAT Mock 11", date: "Oct 15, 2024", time: "2:00 PM" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4 mt-14 max-w-full">
      {/* Header Section */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Hey {user ? user.displayName : "User"},
        </h1>
        <p className="text-sm text-gray-600">
          Mock: <span className="font-semibold">{testName}</span>
        </p>
        <p className="text-sm text-gray-600">
          Attempted On: <span className="text-blue-600">{attemptedOn}</span>
        </p>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mt-4">
        <div className="bg-white rounded-lg shadow p-4 h-2xl">
          <h2 className="text-sm font-semibold text-center mb-2">
            Overall Students
          </h2>
          <Pie data={pieChartData} className="h-full" />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-sm font-semibold text-center mb-2">
            Rank Comparison
          </h2>
          <Line data={rankComparisonData} options={{ responsive: true }} />
        </div>
        <div className="col-span-2 bg-white rounded-lg shadow p-4">
          <h2 className="text-sm font-semibold text-center mb-2">
            Aptitude Section Comparison
          </h2>
          <Radar data={aptitudeSectionData} options={{ responsive: true }} />
        </div>
        <div className="col-span-2 bg-white rounded-lg shadow p-4">
          <h2 className="text-sm font-semibold text-center mb-2">
            Performance Trends
          </h2>
          <Line data={performanceTrends} options={{ responsive: true }} />
        </div>
      </div>

      {/* Recent Test History */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow p-4 mt-4">
        <h2 className="text-sm font-semibold text-center mb-2">
          Recent Test History
        </h2>
        <ul className="text-sm">
          {recentTests.map((test, idx) => (
            <li key={idx} className="flex justify-between p-2">
              <span>
                {test.name} ({test.date}) - Score: {test.score}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Tests */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow p-4 mt-4">
        <h2 className="text-sm font-semibold text-center mb-2">
          Upcoming Tests
        </h2>
        <ul className="text-sm">
          {upcomingTests.map((test, idx) => (
            <li key={idx} className="flex justify-between p-2">
              <span>
                {test.name} ({test.date}) - Time: {test.time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Actions */}
      <div className="w-full max-w-4xl mt-4 flex justify-between">
        <Link
          to="/aipage"
          className="bg-blue-500 text-white text-sm py-2 px-4 rounded shadow hover:bg-blue-600 transition"
        >
          Analyze Mock Solutions
        </Link>
        <button className="bg-gray-800 text-white text-sm py-2 px-4 rounded shadow hover:bg-gray-900 transition">
          Track Errors
        </button>
        <button className="bg-yellow-500 text-white text-sm py-2 px-4 rounded shadow hover:bg-yellow-600 transition">
          Check B-Schools
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        {socialMediaLinks.map((social, idx) => (
          <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={social.icon} className="text-xl text-gray-800 hover:text-blue-500" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
