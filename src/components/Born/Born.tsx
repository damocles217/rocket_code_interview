import React, { ComponentType } from 'react';
import style from '../Chat/sass/Chat.module.scss';
import image from '../../assets/profile.jpeg';

const Born: ComponentType = () => {
  return (
    <div data-testid="born" className={style.messageCompany}>
      <div className={style.img}>
        <img alt="company" src={image} />
      </div>
      <div>
        <h3>¿Cuál es tu fecha de nacimiento?</h3>
        <ul>
          <li className={style.messageCompany__span}>Día</li>
          <li className={style.messageCompany__span}>Mes</li>
          <li className={style.messageCompany__span}>Año</li>
        </ul>
      </div>
    </div>
  );
};

export default Born;
