import React from 'react'
import './Question.css'

const Question = ({question, id, addAnswer, changeAnswer, changeQuestion, changeCorrect}) => {
  
  const handleChange = (e, id, index) => {
    if (!e.target.classList.contains("question__question-checked")){
      changeCorrect(id, index, true);
   } else {
      changeCorrect(id, index, false);
   }
   e.target.classList.toggle("question__question-checked");
  }

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
          <div className="question__flex">
            <input 
              type="text" 
              value={question.answers[index]} 
              onChange={(e) => {changeAnswer(id, index, e)}}
              key={index}
              className="question_wout-border-right"
            />
            <button
              onClick={(e)=> {handleChange(e, id, index)}}
              className="question_checkbox"
            ></button>
          </div>
        )
      })}

      <div className="question_add" onClick={() => {addAnswer(id)}}>
        <span>+</span> Жауап қосу
      </div>
    </div>
  )
}

export default Question