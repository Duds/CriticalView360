import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './register';
import Login from './login';
import Dashboard from './dashboard';
import NewCard from './newCard';
import Review from './review';
import Visualise from './visualise';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new-card" component={NewCard} />
        <Route path="/review" component={Review} />
        <Route path="/visualise" component={Visualise} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;