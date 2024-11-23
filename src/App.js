import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import { About, Services } from "./pages";
import CoursePage from "./pages/CoursesPage";
import QuizPage from "./pages/QuizPage";
import QuizInfoPage from "./pages/QuizInfoPage"; // Import the QuizInfoPage
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import StudentDashboard from "./pages/StudentDashboard";
import Register from "./pages/Register";
import InstructorsPage from "./pages/InstructorsPage";
import Navbar from "./components/Navbar";
import ProfileCard from "./pages/ProfileCard";
import Classes from "./pages/Classes";
import Footer from "./utility/Footer";
import IntroPage from "./pages/IntroPage";
import ProgrammingAp from "./pages/ProgrammingAp";
import Team from "./pages/Team";
import ThankYouPage from "./pages/ThankYouPage";
import QuestionGeneratorPage from "./pages/QuestionGeneratorPage";
// import BunnyCDNFetch from "./components/BunnyCdn";

import Lecture from "./pages/Lecture";
import AiPage from "./pages/AiPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const location = useLocation();

  // Pages where the footer should be hidden
  const hideFooterPages = ["/profile", "/aipage","/chat"];

  return (
    <div className="App font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz-info" element={<QuizInfoPage />} />{" "}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructors" element={<Team />} />
        <Route path="/programming" element={<ProgrammingAp />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/generate-questions" element={<QuestionGeneratorPage />} />
        <Route path="/lectures" element={<Lecture />} />
        <Route path="/aipage" element={<AiPage />} />
        <Route path="/chat/:mode" element={<ChatPage />} />
      </Routes>
      {/* Render Footer only if the current path is not in the hideFooterPages */}
      {!hideFooterPages.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
