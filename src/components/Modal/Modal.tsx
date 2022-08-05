import React, { ComponentType } from 'react';
import { FormType } from 'types/form';
import style from './sass/Modal.module.scss';

const Modal: ComponentType<{ data: FormType }> = ({
  data,
}: {
  data: FormType;
}) => {
  return (
    <div className={style.modal}>
      <p>{data.fullname}</p>
      <p>{data.born_date}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </div>
  );
};

export default Modal;
