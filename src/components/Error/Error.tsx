import React, { ComponentType } from 'react';
import style from '../Chat/sass/Chat.module.scss';

const Error: ComponentType<{ message: string }> = ({
  message,
}: {
  message: string;
}) => {
  return (
    <div className={style.messageError}>
      <p>{message}</p>
    </div>
  );
};

export default Error;
