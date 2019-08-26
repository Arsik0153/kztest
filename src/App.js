import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderSignUp from './components/HeaderSignUp/HeaderSignUp';
import HeaderSignIn from './components/HeaderSignIn/HeaderSignIn';
import Cabinet from './components/Cabinet/Cabinet';
import NewTest from './components/Cabinet/NewTest/NewTest';
import TestDetails from './components/TestDetails/TestDetails';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={HeaderSignUp} />
          <Route path='/signin' component={HeaderSignIn} />
          <Route path='/cabinet' component={Cabinet} />
          <Route path='/new' component={NewTest} />
          <Route path='/test/:id' component={TestDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
