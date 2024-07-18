import { Route, Routes } from "react-router-dom";
import "./App.css";

import { About, Services } from "./pages";
import CoursePage from "./pages/CoursesPage";

import QuizPage from "./pages/QuizPage";
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
        <Route path="student" element={<StudentDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructors" element={<InstructorsPage />} />
          {/* Routes for each course detail page */}
          {/* <Route path="/react" element={<CourseDetailReact />} /> */}
         
          {/* <Route path="/javascript" element={<CourseDetailJavaScript />} />
          <Route path="/html" element={<CourseDetailHTML />} />
          <Route path="/python" element={<CourseDetailPython />} />
          <Route path="/nodejs" element={<CourseDetailNodeJS />} />
          <Route path="/java" element={<CourseDetailJava />} /> */}
      
      </Routes>
      <Footer/>
      {/* <Flying/> */}
      {/* <IntroPage/> */}
    </div>
  );
}

export default App;
