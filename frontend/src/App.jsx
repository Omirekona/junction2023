import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import MapsPage from './components/MapsPage';
import MissionPage from './components/MissionPage';
import LoginPage from './auth/Login';
import RegisterPage from './auth/Register';
import ForgotPasswordPage from './auth/ForgotPassword';
import './App.css';
import NavBar from './navigation/NavBar';
import Preference1 from './recommendation/MultipleSelect';
import Preference2 from './recommendation/TwoSelect';
import Preference3 from './recommendation/TripRoutes';

function App() {

  function Layout({ children }) {
    return (
      <>
        <NavBar />
        {children}
      </>
    );
  }
  

  return (
    <Router>
      <div className="App" style={{ backgroundColor: 'beige' }}>
        <main>
          {/* Route Handling */}
          <Routes>
            <Route exact path="/" element={
              <Layout>
                <HomePage />
              </Layout>
            } />
            <Route path="/login" element={
              <Layout>
                <LoginPage />
              </Layout>
            } />
            <Route path="/maps" element={
              <Layout>
                <MapsPage />
              </Layout>
            } />
            <Route path="/mission" element={
              <Layout>
                <MissionPage />
              </Layout>
            } />
            <Route path="/register" element={
              <Layout>
                <RegisterPage />
              </Layout>
            } />
            <Route path="/forgot-password" element={
              <Layout>
                <ForgotPasswordPage />
              </Layout>
            } />
            <Route path="/preference1" element={<Preference1 />} />
            <Route path="/preference2" element={<Preference2 />} />
            <Route path="/preference3" element={<Preference3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
