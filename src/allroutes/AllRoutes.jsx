import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ReactPage from '../pages/CoursesPages/ReactPage';
const AllRoutes = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/courses-react" element={<ReactPage />} />
    </Routes>
  // </Router>
  )
}

export default AllRoutes;