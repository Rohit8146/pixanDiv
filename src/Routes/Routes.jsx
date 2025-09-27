import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import AboutPage from '../Pages/About';
import Projects from '../Pages/Projects';
function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default AppRoutes