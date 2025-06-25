import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectPage from './pages/ProjectPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar/navbar';
import NavItem from './components/Navbar/navItem';
import { Theme, useTheme } from './contexts/ThemeContext';
import logoBlue from './assets/images/logos/Logo_Blue.png';
import logoLGrey from './assets/images/logos/Logo_Light_Grey.png';
import './scss/index.scss';

const LOGO_PATHS = [ logoBlue, logoLGrey, ];

function LogoInsert () {
  const location = useLocation();
  const [currentLogoSrc, setCurrentLogoSrc] = useState(logoLGrey);

  useEffect(() => {
    LOGO_PATHS.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    console.log("Location changed: ", location.pathname);
    switch (location.pathname) {
      case '/about':
        setCurrentLogoSrc(logoBlue);
        break;
      case '/resume':
        setCurrentLogoSrc(logoLGrey);
        break;
      case '/projects':
        setCurrentLogoSrc(logoBlue);
        break;
      default:
        setCurrentLogoSrc(logoLGrey);
        break;
    }

  }, [location.pathname]);

  return (
      <img src={currentLogoSrc} className='logo' />
  );
}

function AppContent() {

  return (
    <>
        <div className="parent text-lGrey">
          <header>
            <div className="navbar-wrapper container justify-content-btwn align-items-center fs-1 pt-2">
              <div className="d-flex logo-wrapper">
                <LogoInsert />
              </div>
              <Navbar>
                <NavItem to="/" label="HOME" />
                <NavItem to="/about" label="ABOUT" />
                <NavItem to="/resume" label="RESUME" />
                <NavItem to="/projects" label="PROJECTS" />
              </Navbar>
            </div>
          </header>

          <main className='pt-5'>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/resume' element={<ResumePage />} />
              <Route path='/projects' element={<ProjectPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>

          </main>

          <footer className='pb-2'>
            <div className="text-body container justify-content-center text-align-center fs-1">
              COPYRIGHT KDUONG INDUSTRIES, INC.<br />ALL RIGHTS RESERVED<br />PRINTED IN U.S.A<br />DO NOT DISTRIBUTE
            </div>
            <div className="text-body text-align-end container flex-column align-items-end fs-1">
              Contact: <br/>
              duongtkevin5438@gmail.com <br />
              +1 (408) 886-8313
            </div>
          </footer>
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
