import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
// TODO: import Dashboard from './components/Dashboard';
// TODO: import NewCard from './components/NewCard';
// TODO: import Review from './components/Review';
// TODO: import Visualise from './components/Visualise';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
