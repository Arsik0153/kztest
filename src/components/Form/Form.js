import React, { Component } from 'react'
import './Form.css';

class Form extends Component{

  state = {
    firstName: '',
    lastName: '',
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
        <h4>Тіркелу</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Аты-жөніңіз</label>
          <div className="header__form-group">
            <input 
              type="text" 
              placeholder="Аты"
              id="firstName"
              onChange={this.handleChange}
              required
            />
            <input 
              type="text" 
              placeholder="Тегі" 
              id="lastName"
              onChange={this.handleChange}
              required
            />
          </div>
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
          <button className="header__form_submit-btn">Тіркелу</button>
        </form>
        <div className="header__right-already">
          <p>Бұрында тіркелдіңіз бе? <a href="">Кіру</a></p>
        </div>
      </div>
    )
  }
}

export default Form;