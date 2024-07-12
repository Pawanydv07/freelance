import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Services } from "./pages";
import CoursePage from "./pages/CoursesPage";
import ClassPage from "./pages/ClassPage";
import QuizPage from "./pages/QuizPage";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import StudentDashboard from "./pages/StudentDashboard";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/courses" element={<CoursePage />} />
        <Route path="/classes" element={<ClassPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="student" element={<StudentDashboard />} />
        <Route path="/register"element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
