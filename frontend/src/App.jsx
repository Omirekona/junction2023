import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MapsPage from './components/MapsPage';
import MissionPage from './components/MissionPage';
import LoginPage from './auth/Login';
import RegisterPage from './auth/Register';
import ForgotPasswordPage from './auth/ForgotPassword';
import './App.css';
import Drawer from 'react-modern-drawer'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="App" style={{backgroundColor: 'beige'}}>
        <main>
          {/* Route Handling */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/maps" element={<MapsPage />}/>
            <Route path="/mission" element={<MissionPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
          </Routes>
        </main>

        <header> 
        </header>
      </div>
    </Router>
  );
}

export default App;
