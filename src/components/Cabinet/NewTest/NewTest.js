import React, { Component } from 'react'
import './NewTest.css';
import Question from '../../Question/Question';

class NewTest extends Component {

  state = {
    name: '',
    duration: '',
    testList: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
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
              <Question />
              <Question />
            </div>
            <div className="question_add" onClick={this.addAnswer}>
              <span>+</span> Сұрақ қосу
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTest
