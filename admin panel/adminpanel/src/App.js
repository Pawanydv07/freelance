import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Courses from "./pages/Courses";
import Sidebar from "./helpers/SideBar";
import CreateCourse from "./pages/CreateCourses";

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-4">
        <Routes>
          {/* Route for Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Route for Courses under Contents */}
          <Route path="/courses" element={<Courses />} />

          {/* Add more Routes as needed */}
          <Route path="/create-course" element={<CreateCourse/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
