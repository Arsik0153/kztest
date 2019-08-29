import React from 'react';
import './TestDetails.css';
import QuestionListView from './QuestionListView/QuestionListView';
import { Link } from 'react-router-dom';
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
          <div className="question_add quesiion__view-btn" style={{width: '100%'}}>
            <Link to='/cabinet'>
              Артқа оралу
            </Link>
          </div>
        </div>
        <QuestionListView />
      </div>
    </div>
  )
}

export default TestDetails;