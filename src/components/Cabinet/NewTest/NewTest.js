import React, { Component } from 'react'
import './NewTest.css';
import Question from '../../Question/Question';

class NewTest extends Component {

  state = {
    name: '',
    duration: '',
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
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  addAnswer = () => {
    
  }

  changeAnswer = (questionId, answerId, e) => {
    let questionsList = this.state.questionsList;
    questionsList[questionId].answers[answerId] = e.target.value;
    this.setState({
      ...this.state,
      questionsList
    });
    console.log(this.state.questionsList);
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
              type="tel" 
              id="duration"
              onChange={this.handleChange}
              required
            />
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
                  />
                );
              })}
            </div>
            <div className="question_add">
              <span>+</span> Сұрақ қосу
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTest
