import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NewCard from './components/NewCard';
import Review from './components/Review';
import Visualise from './components/Visualise';

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

        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
