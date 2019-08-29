import React from 'react'
import './QuestionListView.css'

const QuestionListView = () => {
    return (
        <div className="question-list-view new-test__list">
            <div className="test__list-block">
                <div className="question block">
                    <div className="question_number">1</div>
                    <input 
                        type="text"
                        className="question__question"
                        value="dsfsd"
                    />
                    <div className="question__flex">
                        <input 
                        type="text"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionListView
