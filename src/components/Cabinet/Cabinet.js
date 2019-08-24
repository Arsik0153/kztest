import React from 'react';
/* import { Link } from 'react-router-dom'; */
import './Cabinet.css';
import Profile from '../Profile/Profile';
import TestList from '../TestList/TestList';
import { connect } from 'react-redux';

const Cabinet = (props) => {
  return(
    <div className="cabinet first">
      <div className="container">
        <Profile testCount={props.tests.length} />
        <TestList tests={props.tests}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tests: state.test.tests
  }
}

export default connect(mapStateToProps)(Cabinet);