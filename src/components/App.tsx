import React, { ComponentType, lazy, Suspense } from 'react';
const Header = lazy(() => import('./Header/Header'));
const Chat = lazy(() => import('./Chat/Chat'));

// Styles
import style from './App.module.scss';

const App: ComponentType = () => {
  return (
    <div className={style.main}>
      <Header />
      <Suspense fallback={<div />}>
        <Chat />
      </Suspense>
    </div>
  );
};

export default App;
