import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar/navbar';
import NavItem from './components/Navbar/navItem';
import { Theme, useTheme } from './contexts/ThemeContext';
import './scss/index.scss';

function AppContent() {

  return (
    <>
        <div className="parent bg-blue">
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/work' element={<WorkPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    </>
  );
}

function App () {
  return (
    <Router>
      <Theme>
        <AppContent />
      </Theme>
    </Router>
  )
} 

export default App
