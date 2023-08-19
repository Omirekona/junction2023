import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MapsPage from './components/MapsPage';
import MissionPage from './components/MissionPage';
import LoginPage from './auth/Login';
import './App.css';
import Drawer from 'react-modern-drawer'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="App">
        <header>
        <button onClick={toggleDrawer}>Menu</button>
          <nav>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left' className='drawer z-10' > 
              <ul>
                <li><Link to="/" onClick={toggleDrawer}>Home</Link></li>
                <li><Link to="/login" onClick={toggleDrawer}>Log in</Link></li>
                <li><Link to="/maps" onClick={toggleDrawer}>Maps</Link></li>
                <li><Link to="/mission" onClick={toggleDrawer}>Mission</Link></li>
              </ul>
            </Drawer>
          </nav>
        </header>
        
        <main>
          {/* Route Handling */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/maps" element={<MapsPage />}/>
            <Route path="/mission" element={<MissionPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
