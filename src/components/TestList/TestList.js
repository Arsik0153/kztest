import React from 'react'
import './TestList.css';
import Test from '../Test/Test';
import { Link } from 'react-router-dom';

const Tests = ({tests}) => {
  return (
    <div className="tests">
      <h2>Барлық тесттер</h2>
      <div className="tests__flex">
        
          <div className="test test_new">
            <Link to='/new'>
            <span>+</span>
            <h3>Жаңа тест құру</h3>
            </Link>
          </div>
        { tests && tests.map((test) => {
          return(
            <Test test={test} key={test.id}/>
          )
        }) }
      </div>
    </div>
  )
}

export default Tests
