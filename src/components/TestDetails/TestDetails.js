import React from 'react';
import './TestDetails.css';
/* import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'; */

const TestDetails = (props) => {
  const id = props.match.params.id;
  return(
    <div className="first test-details cabinet">
      <div className="container">
        <div className="test-detail profile">
          <h4>UX Basics test</h4>
          <p>Код: <span>{id}</span></p>
          <p>Берілетін уақыт: 15 мин</p>
        </div>
      </div>
      <div className="">

      </div>
    </div>
  )
}

export default TestDetails;