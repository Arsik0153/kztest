import React from 'react'
import './Form.css';

const Form = () => {
  return (
    <div className="header__form">
      <h4>Тіркелу</h4>
      <form>
        <label>Аты-жөніңіз</label>
        <div className="header__form-group">
          <input type="text" placeholder="Аты" required/>
          <input type="text" placeholder="Тегі" required/>
        </div>
        <label>E-mail</label>
        <input type="email" placeholder="example@example.com" required/>
        <label>Құпия сөз</label>
        <input type="password" placeholder="" required/>
        <button className="header__form_submit-btn">Тіркелу</button>
      </form>
    </div>
  )
}

export default Form
