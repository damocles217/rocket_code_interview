import React, { ComponentType } from 'react';
import Header from './Header/Header';
import style from './App.module.scss';

const App: ComponentType = () => {
  return (
    <div className={style.main}>
      <Header />
      <div>Hola</div>
    </div>
  );
};

export default App;
