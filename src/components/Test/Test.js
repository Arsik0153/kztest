import React from 'react';
import './Test.css';

const Test = ({test}) => {
  return (
    <div className="test test_default">
      <h4>{test.name}</h4>
      <p className="test_code">{test.code}</p>
    </div>
  )
}

export default Test;