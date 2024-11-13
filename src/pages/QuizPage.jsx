import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const QuizPage = () => {
  const [quizData, setQuizData] = useState([]);
  const [groupedQuestions, setGroupedQuestions] = useState({});
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [markedForReview, setMarkedForReview] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [sectionScores, setSectionScores] = useState({});
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://backend-freelance-5kar.onrender.com/api/questions/questions"
        );
        const data = await response.json();
        const grouped = data.reduce((acc, question) => {
          if (!acc[question.title]) {
            acc[question.title] = [];
          }
          acc[question.title].push(question);
          return acc;
        }, {});
        setGroupedQuestions(grouped);
        setQuizData(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const sections = Object.keys(groupedQuestions).filter(
    (section) => groupedQuestions[section].length > 3
  );

  if (quizData.length === 0) {
    return <div>Loading...</div>;
  }

  const currentSectionQuestions = groupedQuestions[sections[currentSection]];
  const currentQuestion = currentSectionQuestions[currentQuestionIndex];
  const globalQuestionIndex = quizData.findIndex(
    (q) => q._id === currentQuestion._id
  );

  const countMarkedForReview = (section) => {
    return groupedQuestions[section].filter((question) =>
      markedForReview.includes(
        quizData.findIndex((q) => q._id === question._id)
      )
    ).length;
  };

  const handleOptionChange = (index) => {
    setSelectedOption(index);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[globalQuestionIndex] = index;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentSectionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const nextGlobalIndex = quizData.findIndex(
        (q) => q._id === currentSectionQuestions[currentQuestionIndex + 1]._id
      );
      setSelectedOption(userAnswers[nextGlobalIndex] || null);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestionIndex(0);
      const firstGlobalIndex = quizData.findIndex(
        (q) => q._id === groupedQuestions[sections[currentSection + 1]][0]._id
      );
      setSelectedOption(userAnswers[firstGlobalIndex] || null);
    }
  };

  const handleClearResponse = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[globalQuestionIndex] = null;
    setUserAnswers(updatedAnswers);
    setSelectedOption(null);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevGlobalIndex = quizData.findIndex(
        (q) => q._id === currentSectionQuestions[currentQuestionIndex - 1]._id
      );
      setSelectedOption(userAnswers[prevGlobalIndex] || null);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleQuestionClick = (questionGlobalIndex) => {
    const question = quizData[questionGlobalIndex];
    const sectionTitle = question.title;
    const sectionIndex = sections.findIndex(
      (section) => section === sectionTitle
    );
    const questionIndexInSection = groupedQuestions[sectionTitle].findIndex(
      (q) => q._id === question._id
    );

    setCurrentSection(sectionIndex);
    setCurrentQuestionIndex(questionIndexInSection);
    setSelectedOption(userAnswers[questionGlobalIndex] || null);
  };

  const handleMarkForReview = () => {
    const updatedReviewList = [...markedForReview];
    if (markedForReview.includes(globalQuestionIndex)) {
      const index = updatedReviewList.indexOf(globalQuestionIndex);
      updatedReviewList.splice(index, 1);
    } else {
      updatedReviewList.push(globalQuestionIndex);
    }
    setMarkedForReview(updatedReviewList);
  };

  const calculateSectionFeedback = (correctAnswers, totalQuestions) => {
    const percentage = (correctAnswers / totalQuestions) * 100;
    let feedbackText = "";
    let badgeLevel = "";

    if (percentage < 50) {
      feedbackText = "Needs Improvement";
      badgeLevel = "Bronze";
    } else if (percentage >= 50 && percentage < 75) {
      feedbackText = "Good, but can improve";
      badgeLevel = "Silver";
    } else if (percentage >= 75 && percentage < 85) {
      feedbackText = "Excellent, minor improvements needed";
      badgeLevel = "Gold";
    } else if (percentage >= 85 && percentage < 100) {
      feedbackText = "Congrats, you achieved the badge!";
      badgeLevel = "Platinum";
    } else {
      feedbackText = "Genius! All answers are correct";
      badgeLevel = "Diamond";
    }
    return { feedbackText, badgeLevel };
  };

  const handleSubmit = () => {
    let score = 0;
    const scores = {};
    const feedbacks = {};

    sections.forEach((section) => {
      const sectionQuestions = groupedQuestions[section];
      let sectionScore = 0;

      sectionQuestions.forEach((question) => {
        const questionIndex = quizData.findIndex((q) => q._id === question._id);
        if (userAnswers[questionIndex] === question.correctAnswerIndex) {
          sectionScore += 1;
          score += 1;
        }
      });

      const feedback = calculateSectionFeedback(
        sectionScore,
        sectionQuestions.length
      );
      scores[section] = sectionScore;
      feedbacks[section] = feedback;
    });

    setTotalScore(score);
    setSectionScores(scores);
    setFeedback(feedbacks);
    setQuizCompleted(true);
  };
  const chartData = {
    labels: sections,
    datasets: [
      {
        label: "Score",
        data: sections.map((section) => sectionScores[section]),
        backgroundColor: sections.map((section) => {
          const badgeLevel = feedback[section]?.badgeLevel;
          return badgeLevel === "Diamond"
            ? "#b9f2ff80"
            : badgeLevel === "Platinum"
            ? "#e5e4e280"
            : badgeLevel === "Gold"
            ? "#ffd70080"
            : badgeLevel === "Silver"
            ? "#c0c0c080"
            : "#cd7f3280";
        }),
        borderColor: sections.map((section) => {
          const badgeLevel = feedback[section]?.badgeLevel;
          return badgeLevel === "Diamond"
            ? "#b9f2ff"
            : badgeLevel === "Platinum"
            ? "#e5e4e2"
            : badgeLevel === "Gold"
            ? "#ffd700"
            : badgeLevel === "Silver"
            ? "#c0c0c0"
            : "#cd7f32";
        }),
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: "Section Scores",
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center h-1/2 bg-gray-100 p-6 mt-4">
        <div className="bg-white w-full max-w-8xl p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-6 animate-bounce">
            Quiz Completed!
          </h2>
          <p className="text-xl">
            Your total score is: {totalScore} out of {quizData.length}
          </p>
          <Line data={chartData} options={chartOptions} className="my-8" />

          <button
            className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
            onClick={() => {
              setQuizCompleted(false);
              setCurrentSection(0);
              setCurrentQuestionIndex(0);
              setSelectedOption(null);
              setUserAnswers([]);
              setMarkedForReview([]);
              setTotalScore(0);
              setSectionScores({});
              setFeedback({});
            }}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestionNumber = currentQuestionIndex + 1;

  return (
    <div className="flex h-screen overflow-hidden mt-12">
      {/* Left Section: Title, Statement, Question */}
      <div className="w-2/3 p-6 bg-white border-r-2 border-gray-300 overflow-auto mt-8">
        <div className="mb-4">
          <h2 className="text-lg font-bold">
            {currentQuestion.title} (Question {currentQuestionNumber})
          </h2>
          <p className="text-gray-600 mb-2">{currentQuestion.statement}</p>
          <h3 className="font-medium">{currentQuestion.question}</h3>
        </div>
      </div>

      {/* Middle Section: Options */}
      <div className="w-1/3 p-6 bg-gray-100 overflow-auto mt-8">
        <div className="mb-4">
          <h4 className="font-bold">Choose your answer:</h4>
        </div>
        <div>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="mb-2">
              <input
                type="radio"
                id={`option${index}`}
                name="options"
                checked={selectedOption === index}
                onChange={() => handleOptionChange(index)}
                className="mr-2"
              />
              <label htmlFor={`option${index}`} className="text-gray-700">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Question numbers and sections */}
      <div className="w-1/6 bg-black p-4 overflow-auto mt-8">
        <h4 className="font-bold text-center text-white">Sections</h4>
        <div className="mt-4">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h5 className="font-semibold text-blue-500 text-center mt-2">
                {section}
              </h5>
              <ul className="flex flex-wrap gap-2 justify-center my-2">
                {groupedQuestions[section].map((question, questionIndex) => {
                  const questionGlobalIndex = quizData.findIndex(
                    (q) => q._id === question._id
                  );
                  return (
                    <li
                      key={questionIndex}
                      onClick={() => handleQuestionClick(questionGlobalIndex)}
                      className={`p-2 cursor-pointer rounded ${
                        userAnswers[questionGlobalIndex] != null
                          ? "bg-green-500 text-white"
                          : "bg-gray-300 text-black"
                      } ${
                        markedForReview.includes(questionGlobalIndex)
                          ? "border-yellow-400 border-2"
                          : ""
                      }`}
                    >
                      {questionIndex + 1}
                    </li>
                  );
                })}
              </ul>
              <p className="text-white text-center text-xs mb-4">
                Marked for Review: {countMarkedForReview(section)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="fixed bottom-0 w-full py-4 bg-white shadow-lg">
        <div className="flex justify-between items-center mx-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0 && currentSection === 0}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={handleMarkForReview}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Mark for Review
          </button>
          <button
            onClick={handleClearResponse}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear Response
          </button>
          <button
            onClick={handleSkip}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Skip
          </button>
          <button
            onClick={handleNext}
            disabled={
              currentQuestionIndex === currentSectionQuestions.length - 1 &&
              currentSection === sections.length - 1
            }
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
