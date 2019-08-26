import React from 'react';
/* import { Link } from 'react-router-dom'; */
import './Cabinet.css';
import Profile from '../Profile/Profile';
import TestList from '../TestList/TestList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Cabinet = (props) => {
  console.log(props)
  return(
    <div className="cabinet first">
      <div className="container">
        <Profile testCount={props.tests.length} />
        <TestList tests={props.tests.tests}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tests: state.firestore.ordered
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tests'}
  ])
)(Cabinet);