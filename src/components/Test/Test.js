import React from 'react';
import './Test.css';
import { Link } from 'react-router-dom';

const Test = ({test}) => {
  return (
    <Link to={'/test/' + test.code}>
    <div className="test test_default">
    
      <h4>{test.name}</h4>
      <p className="test_code">{test.code}</p>
    </div>
    </Link>
  )
}

export default Test;