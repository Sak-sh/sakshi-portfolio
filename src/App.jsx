// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './Components/Projects';
import Contact from './components/Contact';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';

const MainPageWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 200);
      }
    }
  }, [location]);

  return (
    <>
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPageWrapper />
              <Footer />
            </>
          }
        />
        <Route
          path="/project1"
          element={
            <>
              <Project1 />
              <Footer />
            </>
          }
        />
        <Route
          path="/project2"
          element={
            <>
              <Project2 />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
