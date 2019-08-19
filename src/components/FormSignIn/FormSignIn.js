import React, { Component } from 'react'
import './FormSignIn.css';
import { Link } from 'react-router-dom';

class FormSignIn extends Component{

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render(){
    return (
      <div className="header__form">
        <h4>Кіру</h4>
        <form onSubmit={this.handleSubmit}>
          <label>E-mail</label>
          <input 
            type="email" 
            placeholder="example@example.com"
            id="email"
            onChange={this.handleChange}
            required
          />
          <label>Құпия сөз</label>
          <input 
            type="password" 
            placeholder="" 
            id="password"
            onChange={this.handleChange}
            required
          />
          <button className="header__form_submit-btn">Кіру</button>
        </form>
        <div className="header__right-already">
          <p>Әлі тіркелген жоқсыз ба? <Link to='/'>Тіркелу</Link></p>
        </div>
      </div>
    )
  }
}

export default FormSignIn;