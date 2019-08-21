import React from 'react'
import './Tests.css';
import Test from '../Test/Test';
import { Link } from 'react-router-dom';

const Tests = () => {
  return (
    <div className="tests">
      <h2>Барлық тесттер</h2>
      <div className="tests__flex">
        <Link to='/new'>
          <div className="test test_new">
            <span>+</span>
            <h3>Жаңа тест құру</h3>
          </div>
        </Link>
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
