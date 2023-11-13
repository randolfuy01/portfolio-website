import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/about.js';
import BlogPage from './pages/blog.js';
import ContactPage from './pages/contact.js';
import ProjectPage from './pages/project.js';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' exact element={<AboutPage/>} />
        <Route path='/About' exact element={<AboutPage/>} />
        <Route path='/Project' element={<ProjectPage/>} />
        <Route path='/Blog' element={<BlogPage/>} />
        <Route path='/Contact' element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
