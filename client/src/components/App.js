import React from 'react';
import {Route, Switch } from 'react-router-dom';
import About from './about';
import Login from './auth/Login';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
