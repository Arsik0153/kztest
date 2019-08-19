import React from 'react';
import profileImage from './../../static/img/profile__image.svg';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <img src={profileImage} alt="" className="profile__image"/>
      <h4>Сайранбеков Жанарыс</h4>
      <p>Тест саны: 5</p>
      <p>Жазылу: <span>PRO</span></p>
    </div>
  )
}

export default Profile;
