import React from 'react'
import './Question.css'

const Question = ({question, id, addAnswer, changeAnswer, changeQuestion}) => {
  
  return (
    <div className="question block">
      <div className="question_number">{id+1}</div>
      <input 
        type="text" 
        value={question.question} 
        onChange={(e) => {changeQuestion(id, e)}}
        className="question__question"
      />

      {question.answers.map((answer, index) => {
        return(
          <input 
            type="text" 
            value={question.answers[index]} 
            onChange={(e) => {changeAnswer(id, index, e)}}
            key={index}
          />
        )
      })}

      <div className="question_add" onClick={() => {addAnswer(id)}}>
        <span>+</span> Жауап қосу
      </div>
    </div>
  )
}

export default Question