import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderSignUp from './components/HeaderSignUp/HeaderSignUp';
import HeaderSignIn from './components/HeaderSignIn/HeaderSignIn';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={HeaderSignUp} />
          <Route path='/signin' component={HeaderSignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
