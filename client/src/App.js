import { auth } from './firebase';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NewCard from './components/NewCard';
import Review from './components/Review';
import Visualise from './components/Visualise';
import NotFound from './components/NotFound';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      window.location.href = '/login';
    });
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              {user ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newCard" element={<NewCard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/visualise" element={<Visualise />} />
          <Route path="*" element={<NotFound />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
