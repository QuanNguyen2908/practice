import React from 'react';
import './App.css';
import MainMenu from './App/Component/MainMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path='/' component={MainMenu} />
      {/* <Route exact path="/login" component={Login} /> */}
      {/* <Route path='/dashboard' component={Dashboard} />
      <Route exact path='/' component={Login} /> */}
      <Route path='/home' component={MainMenu} />
    </Switch>
  </Router>
  );
}

export default App;
