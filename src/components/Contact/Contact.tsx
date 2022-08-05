import React, { ComponentType } from 'react';
import style from '../Chat/sass/Chat.module.scss';
import image from '../../assets/profile.jpeg';

const Contact: ComponentType = () => {
  return (
    <div data-testid="contact" className={style.messageCompany}>
      <div className={style.img}>
        <img alt="company" src={image} />
      </div>
      <div>
        <h3>Datos de contacto</h3>
        <ul>
          <li className={style.messageCompany__span}>Correo electronico</li>
          <li className={style.messageCompany__span}>Celular</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
