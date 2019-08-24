import React, { Component } from 'react'
import './NewTest.css';
import Question from '../../Question/Question';
import { createTest } from '../../../store/actions/testActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class NewTest extends Component {

  state = {
    name: '',
    duration: '',
    code: Math.floor(1000 + Math.random() * 9000),
    questionsList: [
      {
        question: 'Сұрақ',
        answers: [
          '',
          '',
          ''
        ]
      }
    ]
  }

  handleChange = (e) => {
    e.target.id === "duration" ? (
      this.setState({
        [e.target.id]: e.target.value.replace(/[^0-9]+/g, "")
      })
    ) : (
      this.setState({
        [e.target.id]: e.target.value
      })
    )
  }

  addAnswer = (id) => {
    let questionsList = this.state.questionsList;
    questionsList[id].answers.push('');
    this.setState({
      ...this.state,
      questionsList
    })
  }

  addQuestion = () => {
    let questionsList = this.state.questionsList;
    questionsList.push({
      question: 'Сұрақ',
      answers: [
        '',
        '',
        ''
      ]
    });
    this.setState({
      ...this.state,
      questionsList
    });
  }

  changeAnswer = (questionId, answerId, e) => {
    let questionsList = this.state.questionsList;
    questionsList[questionId].answers[answerId] = e.target.value;
    this.setState({
      ...this.state,
      questionsList
    });
  }

  changeQuestion = (questionId, e) => {
    let questionsList = this.state.questionsList;
    questionsList[questionId].question = e.target.value.replace('<h4>', '').replace('</h4>', '');
    this.setState({
      ...this.state,
      questionsList
    });
  }

  handleSubmit = () => {
    this.props.createTest(this.state);
    return <Redirect to='/cabinet'/>
  }

  render(){
    return (
      <div className="new-test first">
        <div className="container">
          <div className="new-test__main block">
            <h4>Жаңа тест</h4>
            <label>Тесттің аты</label>
            <input 
              type="text" 
              id="name"
              onChange={this.handleChange}
              required
            />
            <label>Тестке берілетін уақыт (мин)</label>
            <input 
              type="number"
              min="0"
              id="duration"
              onChange={this.handleChange}
              required
            />
            <div className="question_add" onClick={this.handleSubmit} style={{width: '100%'}}>
              Сақтау
            </div>
          </div>

          <div className="new-test__list">
            <h2>Тест сұрақтары</h2>
            <div className="new-test__list_block">
              { this.state.questionsList.map((question, index) => {
                return(
                  <Question 
                    question={question} 
                    key={index}
                    id={index}
                    addAnswer={this.addAnswer}
                    changeAnswer={this.changeAnswer}
                    changeQuestion={this.changeQuestion}
                  />
                );
              })}
            </div>
            <div className="question_add" onClick={this.addQuestion}>
              <span>+</span> Сұрақ қосу
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTest: (test) => dispatch(createTest(test))
  }
}

export default connect(null, mapDispatchToProps)(NewTest)
