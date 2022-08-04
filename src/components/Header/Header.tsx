import React, { ComponentType } from 'react';
import style from './sass/Header.module.scss';

const Header: ComponentType = () => {
  return (
    <header className={style.header} data-testid="header">
      <h3>Formulario de contacto</h3>
      <h5>Consteste en solo 5 minutos y quede en la empresa</h5>
    </header>
  );
};

export default Header;
