import { Route, Routes } from "react-router-dom";
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
import BunnyCDNFetch from "./components/BunnyCdn";

function App() {
  return (
    <div className="App">
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
        <Route path="/quiz-info" element={<QuizInfoPage />} /> {/* Add this line */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructors" element={<Team />} />
        <Route path="/programming" element={<ProgrammingAp />} />
        <Route path="/thank-you"element={<ThankYouPage/>}/>
        <Route path="/generate-questions" element={<QuestionGeneratorPage />} />
        {/* Routes for each course detail page */}
        {/* <Route path="/react" element={<CourseDetailReact />} /> */}
        {/* <Route path="/javascript" element={<CourseDetailJavaScript />} />
        <Route path="/html" element={<CourseDetailHTML />} />
        <Route path="/python" element={<CourseDetailPython />} />
        <Route path="/nodejs" element={<CourseDetailNodeJS />} />
        <Route path="/java" element={<CourseDetailJava />} /> */}
      </Routes>
      <BunnyCDNFetch/>
      <Footer />
      {/* <Flying /> */}
      {/* <IntroPage /> */}
    </div>
  );
}

export default App;
