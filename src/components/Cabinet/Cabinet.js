import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cabinet.css';
import Profile from '../Profile/Profile';
import Tests from '../TestList/Tests';

class Cabinet extends Component {
  render(){
    return(
      <div className="cabinet first">
        <div className="container">
          <Profile />
          <Tests />
        </div>
      </div>
    );
  }
}

export default Cabinet;