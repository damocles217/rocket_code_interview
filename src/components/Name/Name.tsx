import React, { ComponentType } from 'react';
import style from '../Chat/sass/Chat.module.scss';
import image from '../../assets/profile.jpeg';

const Name: ComponentType = () => {
  return (
    <div data-testid="name" className={style.messageCompany}>
      <div className={style.img}>
        <img alt="company" src={image} />
      </div>
      <div>
        <h3>¿Cuál es tu nombre?</h3>
        <ul>
          <li className={style.messageCompany__span}>Nombre</li>
          <li className={style.messageCompany__span}>Segundo nombre</li>
          <li className={style.messageCompany__span}>Apellido paterno</li>
          <li className={style.messageCompany__span}>Apellido materno</li>
        </ul>
      </div>
    </div>
  );
};

export default Name;
