import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services } from "./pages";
import CoursePage from "./pages/CoursesPage";
import ClassPage from "./pages/ClassPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses"element={<CoursePage/>}/>
        <Route path="/classes"element={<ClassPage/>}/>
        <Route path="/quiz"element={<QuizPage/>}/>
      </Routes>
    </div>
  );
}

export default App;