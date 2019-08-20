import React from 'react'
import './Tests.css';
import Test from '../Test/Test';

const Tests = () => {
  return (
    <div className="tests">
      <h2>Барлық тесттер</h2>
      <div className="tests__flex">
        <div className="test test_new">
          <span>+</span>
          <h3>Жаңа тест құру</h3>
        </div>
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
      </div>
    </div>
  )
}

export default Tests
