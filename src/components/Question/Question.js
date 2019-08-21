import React from 'react'
import './Question.css'
import ContentEditable from 'react-contenteditable'

const Question = ({question, id, addAnswer, changeAnswer}) => {
  
  return (
    <div className="question block">
      <div className="question_number">1</div>
      <ContentEditable
        html={`<h4>${question.question}</h4>`}
        disabled={false}
      />

      {question.answers.map((answer, index) => {
        return(
          <ContentEditable
            disabled={false}
            onChange={(e) => {changeAnswer(id, index, e)}}
            key={index}
            html={question.answers[index]}
          />
        )
      })}

      <div className="question_add" onClick={addAnswer}>
        <span>+</span> Жауап қосу
      </div>
    </div>
  )
}

export default Question