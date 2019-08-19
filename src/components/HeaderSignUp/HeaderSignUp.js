import React from 'react';
import './HeaderSignUp.css';
import testing from './../../static/img/header__mobile-testing.svg';
import FormSignUp from '../FormSignUp/FormSignUp';

const HeaderSignUp = () => {
  return(
    <div className="header">
      <div className="container">
        <div className="header__left">
          <h1>Жеңіл <span className="header__left_hero-text__orange">онлайн</span><br/> тестілеу</h1>
          <img src={testing} alt=""/>
        </div>
        <div className="header__right">
          <FormSignUp />
        </div>
      </div>
    </div>
  );
}

export default HeaderSignUp;