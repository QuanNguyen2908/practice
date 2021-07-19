import React from 'react';
import './App.css';
import MainMenu from './App/Component/MainMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './App/Component/SignIn';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path='/' component={SignIn} />
      <Route exact path="/login" component={SignIn} />
      <Route path='/' component={MainMenu} />
    </Switch>
  </Router>
  );
}

export default App;
