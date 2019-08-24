import React from 'react';
import profileImage from './../../static/img/profile__image.svg';
import './Profile.css';

const Profile = ({testCount}) => {
  return (
    <div className="profile">
      <img src={profileImage} alt="" className="profile__image"/>
      <h4>Сайранбеков Жанарыс</h4>
      <p>Тест саны: {testCount}</p>
      <p>Жазылу: <span>PRO</span></p>
    </div>
  )
}

export default Profile;
