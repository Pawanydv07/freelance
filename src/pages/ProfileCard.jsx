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
        data: yourScores,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: true,
        tension: 0.3,
      },
      {
        label: "Overall Students' Average",
        data: overallAverageScores,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
        fill: true,
        tension: 0.3,
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

  const badges = [
    "10 Mock Tests Completed 🎯",
    "Top 5% in Quantitative Aptitude 🏅",
  ];
  const activities = [
    "Attempted iCAT Mock 9 - Sept 9, 2024 📅",
    "Reviewed Mock 8 Solutions - Sept 5, 2024 🔍",
    "Started Quantitative Aptitude Course - Aug 30, 2024 📚",
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

  // Identifying weak areas in aptitude based on the difference between user and top students' scores
  const weakAreas = aptitudeSectionData.labels.filter((label, index) => {
    const userScore = aptitudeSectionData.datasets[0].data[index];
    const topStudentScore = aptitudeSectionData.datasets[1].data[index];
    return userScore < topStudentScore - 15; // Threshold of 15 for weak areas
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4 mt-14 max-w-full">
      {/* Header Section */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-extrabold text-white tracking-tight animate__animated animate__fadeInLeft delay-1s">
            Hey {user ? user.displayName : "User"} 👋
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-lg text-white bg-blue-700 rounded-full px-6 py-3 font-semibold transform hover:scale-110 transition-all cursor-pointer">
              <span className="text-sm">Your Status</span>
              <span className="block text-xs">Ready for the challenge?</span>
            </div>
            <div className="relative">
              <img
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-user-avatar-flaticons-lineal-color-flat-icons.png"
                alt="User"
                className="rounded-full w-12 h-12 border-4 border-white shadow-lg"
              />
              <div className="absolute -top-1 -right-1 bg-green-400 text-white rounded-full p-2 text-xs font-bold">
                💡
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-white mb-2 animate__animated animate__fadeInLeft delay-2s">
          <span className="font-semibold text-yellow-300">Mock:</span>{" "}
          <span className="text-white">{testName}</span>
        </p>
        <p className="text-sm text-white mb-4 animate__animated animate__fadeInLeft delay-3s">
          <span className="font-semibold text-yellow-300">Attempted On:</span>{" "}
          <span className="text-blue-200">{attemptedOn}</span>
        </p>

        <div className="flex justify-center space-x-6">
          <div className="flex items-center text-white bg-blue-800 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer hover:bg-blue-600">
            <span className="font-semibold text-2xl animate__animated animate__fadeIn animate__delay-2s">
              🕒
            </span>
            <span className="ml-2 text-lg animate__animated animate__fadeIn animate__delay-2s">
              Time Left: 30 mins
            </span>
          </div>
          <div className="flex items-center text-white bg-green-700 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer hover:bg-green-500">
            <span className="font-semibold text-2xl animate__animated animate__fadeIn animate__delay-2s">
              ✅
            </span>
            <span className="ml-2 text-lg animate__animated animate__fadeIn animate__delay-2s">
              Completed: 85%
            </span>
          </div>
        </div>

        {/* Engaging Section with Animated Reactions */}
        <div className="w-full max-w-6xl mt-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            💥 What's Next? 💥
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl text-white">
                <span className="animate__animated animate__heartBeat animate__infinite infinite">
                  ❤️
                </span>
              </div>
              <p className="text-white text-sm mt-2">
                Feeling good? Keep going! 💪
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white">
                <span className="animate__animated animate__shakeX animate__infinite infinite">
                  ⚡
                </span>
              </div>
              <p className="text-white text-sm mt-2">
                Supercharge your performance! 🚀
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white">
                <span className="animate__animated animate__bounce animate__infinite infinite">
                  🔥
                </span>
              </div>
              <p className="text-white text-sm mt-2">
                Keep up the momentum! 🔥
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-6">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-sm font-semibold text-center mb-4">
            Overall Students 🏆
          </h2>
          <Pie data={pieChartData} className="h-72" />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-sm font-semibold text-center mb-4">
            Rank Comparison 📊
          </h2>
          <Line data={rankComparisonData} options={{ responsive: true }} />
        </div>
        <div className="col-span-2 bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-sm font-semibold text-center mb-4">
            Aptitude Section Performance 📊
          </h2>
          <Radar data={aptitudeSectionData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-lg font-semibold text-center mb-4 text-blue-600">
          Leaderboard 🏅
        </h2>
        <ul className="list-none pl-0">
          {leaderboard.map((item, index) => {
            // Rank Emojis for Top 3
            const rankEmoji =
              index === 0
                ? "🥇"
                : index === 1
                ? "🥈"
                : index === 2
                ? "🥉"
                : `${index + 1}`;

            // Dynamic score color: green, yellow, red
            const scoreColor =
              item.score >= 85
                ? "text-green-500"
                : item.score >= 50
                ? "text-yellow-500"
                : "text-red-500";

            // Hover and scale effect
            const hoverEffect =
              "hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform";

            // Additional visual elements (e.g., progress bar, emojis for reaction)
            const progressBarWidth = `${item.score}%`;

            return (
              <li
                key={index}
                className={`flex items-center justify-between p-4 mb-4 rounded-lg bg-gray-50 ${hoverEffect}`}
              >
                <div className="flex items-center space-x-4">
                  {/* Avatar (or Placeholder) */}
                  <img
                    src={
                      item.avatar ||
                      "https://www.gravatar.com/avatar/placeholder.png"
                    } // Default image
                    alt={`${item.name}'s avatar`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <span className="font-semibold text-gray-800">
                      {rankEmoji} {item.name}
                    </span>
                    <div className="text-sm text-gray-500">
                      Ranked #{item.rank}
                    </div>
                  </div>
                </div>

                {/* Score and Progress Bar */}
                <div className="flex flex-col items-end">
                  <div className="relative w-24 h-2 bg-gray-200 rounded-full mt-2">
                    <div
                      className={`absolute top-0 left-0 h-full ${scoreColor} rounded-full`}
                      style={{ width: progressBarWidth }}
                    ></div>
                  </div>
                  <span className={`font-bold ${scoreColor} mt-2`}>
                    {item.score}%
                  </span>
                  <div className="mt-2 text-gray-500 text-xs">
                    {item.score >= 85
                      ? "Excellent! Keep it up 💪"
                      : item.score >= 50
                      ? "Good effort! Keep pushing 🚀"
                      : "Needs improvement, keep working hard! 🔧"}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Badges and Activities Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-lg font-semibold text-center mb-4">
          Badges & Activities 🎯
        </h2>
        <div className="mb-4">
          <h3 className="text-md font-semibold">Badges</h3>
          <ul className="list-disc pl-6">
            {badges.map((badge, index) => (
              <li key={index} className="text-sm text-gray-700">
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold">Recent Activities</h3>
          <ul className="list-disc pl-6">
            {activities.map((activity, index) => (
              <li key={index} className="text-sm text-gray-700">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-lg font-semibold text-center mb-4">
          Weak Areas 💥
        </h2>
        {weakAreas.length > 0 ? (
          weakAreas.map((area, index) => {
            const userScore =
              aptitudeSectionData.datasets[0].data[
                aptitudeSectionData.labels.indexOf(area)
              ];
            const topStudentScore =
              aptitudeSectionData.datasets[1].data[
                aptitudeSectionData.labels.indexOf(area)
              ];
            const scoreDifference = topStudentScore - userScore;
            const improvementNeeded =
              scoreDifference > 15
                ? "🚨 Major Improvement Needed"
                : "⚠️ Needs Practice";

            // To track performance trend (improvement or decline)
            const lastTestScore = getRandomVariation(userScore); // Mocking score variation for trend
            const scoreTrend =
              lastTestScore > userScore
                ? "📈 Improved"
                : lastTestScore < userScore
                ? "📉 Declined"
                : "🔄 Stayed the Same";

            // Color-coded severity based on score difference
            const severityColor =
              scoreDifference > 20
                ? "bg-red-500"
                : scoreDifference > 10
                ? "bg-yellow-500"
                : "bg-green-500";

            return (
              <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <h3 className="font-semibold text-gray-800">{area} 🧠</h3>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-sm text-gray-600">
                      Your Score:{" "}
                      <span className="font-semibold">{userScore}%</span> 🎯
                    </p>
                    <p className="text-sm text-gray-600">
                      Top Score:{" "}
                      <span className="font-semibold">{topStudentScore}%</span>{" "}
                      🏆
                    </p>
                  </div>
                  <div className={`text-sm font-semibold ${severityColor}`}>
                    {improvementNeeded}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Progress to Top: </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${(userScore / topStudentScore) * 100}%`,
                        backgroundColor:
                          severityColor === "bg-red-500"
                            ? "#F44336"
                            : severityColor === "bg-yellow-500"
                            ? "#FFEB3B"
                            : "#4CAF50",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Performance Trend */}
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    Performance Trend:{" "}
                    <span className="font-semibold">{scoreTrend}</span>
                  </p>
                  <div className="h-2 bg-gray-200 rounded-full mt-2">
                    <div
                      className={`h-2 rounded-full ${
                        scoreTrend === "📈 Improved"
                          ? "bg-green-500"
                          : scoreTrend === "📉 Declined"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                      style={{
                        width: `${(lastTestScore / topStudentScore) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Recommendations 📝:</p>
                  <ul className="list-disc pl-6">
                    {area === "Reasoning" && (
                      <li className="text-sm text-gray-700">
                        🧩 Practice reasoning puzzles and logic-based questions.
                      </li>
                    )}
                    {area === "Mathematics" && (
                      <li className="text-sm text-gray-700">
                        📚 Revise core concepts of algebra and calculus.
                      </li>
                    )}
                    {area === "English" && (
                      <li className="text-sm text-gray-700">
                        📖 Read daily to improve vocabulary and comprehension
                        skills.
                      </li>
                    )}
                    {area === "Data Interpretation" && (
                      <li className="text-sm text-gray-700">
                        📊 Work on data analysis and interpretation exercises.
                      </li>
                    )}
                    {area === "Quantitative Aptitude" && (
                      <li className="text-sm text-gray-700">
                        🔢 Focus on problem-solving techniques and speed drills.
                      </li>
                    )}
                    {area === "Logical Ability" && (
                      <li className="text-sm text-gray-700">
                        🧠 Practice logical reasoning with timed tests.
                      </li>
                    )}
                  </ul>
                </div>

                {/* Resources */}
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Helpful Resources 📚:</p>
                  <ul className="list-disc pl-6">
                    <li className="text-sm text-blue-600">
                      <a
                        href="https://www.coursera.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🎓 Coursera - Logical Reasoning Course
                      </a>
                    </li>
                    <li className="text-sm text-blue-600">
                      <a
                        href="https://www.khanacademy.org/math"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📘 Khan Academy - Math Tutorials
                      </a>
                    </li>
                    <li className="text-sm text-blue-600">
                      <a
                        href="https://www.edx.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🎥 edX - Data Interpretation Workshops
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-sm text-gray-700">No weak areas identified 💪🎉</p>
        )}

        {/* Button to navigate to ChatPage */}
        {weakAreas.length > 0 && (
          <div className="mt-4 text-center">
            <Link
              to="/chat/:mode"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              💬 Chat About Weak Areas
            </Link>
          </div>
        )}
      </div>
      {/* Social Media Links */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-lg font-semibold text-center mb-4">
          Connect with Us 🌍
        </h2>
        <div className="flex justify-center space-x-6">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-gray-700 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={link.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>
      {/* Logout */}
      <Link to="/login" className="text-blue-600 text-sm mt-6 hover:underline">
        Logout
      </Link>
    </div>
  );
};

export default ProfilePage;
