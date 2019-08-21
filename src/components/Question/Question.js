import React, { Component } from 'react'
import './Question.css'
import ContentEditable from 'react-contenteditable'

class Question extends Component {

  state = {
    question: '',
    answers: [
      '',
      '',
      ''
    ]
  }

  addAnswer = () => {
    let answers = this.state.answers;
    answers.push('');
    this.setState({
      answers
    });
  }

  changeAnswer = (e) => {
    let answers = this.state.answers;
    answers[e.currentTarget.id] = e.currentTarget.innerText;
    this.setState({
      answers
    });
  }

  render(){
    return (
      <div className="question block">
        <div className="question_number">1</div>
        <ContentEditable
          html="<h4>Сұрақ</h4>"
          disabled={false}
          onContextMenu={this.handleContextMenu}
        />

        {this.state.answers.map((answer, index) => {
          return(
            <ContentEditable
              disabled={false}
              onContextMenu={this.handleContextMenu}
              onChange={this.changeAnswer}
              key={index}
              id={index}
              html={this.state.answers[index]}
            />
          )
        })}

        <div className="question_add" onClick={this.addAnswer}>
          <span>+</span> Жауап қосу
        </div>
      </div>
    )
  }
}

export default Question