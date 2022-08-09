import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { FormType } from 'types/form';

export const handleClick = (
  form: FormType,
  setFinal: Dispatch<SetStateAction<boolean>>,
) => {
  setFinal(true);

  if (form.email && form.phone)
    localStorage.setItem('values', JSON.stringify(form));
};

export const handleChange = (
  e: ChangeEvent<HTMLTextAreaElement>,
  setState: Dispatch<SetStateAction<string>>,
) => {
  setState(e.target.value);
};

export const handleSubmit = (
  e: FormEvent,
  text: string,
  setMessages: Dispatch<
    SetStateAction<Array<{ owner: string; message: string }>>
  >,
  setText: Dispatch<SetStateAction<string>>,
  form: FormType,
  setForm: Dispatch<SetStateAction<FormType>>,
) => {
  e.preventDefault();
  text = text.trim();
  text = text.replace(/ +/g, ' ');

  // Just send the message
  if (text.length > 0)
    setMessages(prev => [...prev, { message: text, owner: 'me' }]);
  // Set the name
  if (text.length > 1 && form.fullname == '') {
    setMessages(prev => [...prev, { message: 'date', owner: 'company' }]);
    setForm({ ...form, fullname: text });
  }

  // Set the age
  else if (form.fullname != '' && !form.born_date && text.length > 0) {
    text = text.replace(/de/gi, '');
    const arrText = text.split(/ +/g);

    if (arrText.length == 3) {
      setMessages(prev => [...prev, { message: 'contact', owner: 'company' }]);
      setForm({ ...form, born_date: text });
    } else {
      setMessages(prev => [
        ...prev,
        { message: 'Ponga una fecha valida', owner: 'error' },
      ]);
    }
  }

  if (form.born_date != '' && text.length > 0) {
    const arrText = text.split('\n');

    if (!arrText[0] || !arrText[1])
      setMessages(prev => [
        ...prev,
        { message: 'Ponga datos valids', owner: 'error' },
      ]);
    else if (arrText[0].includes('@') && arrText[1].length >= 10) {
      setForm({ ...form, email: arrText[0], phone: arrText[1] });
    } else if (arrText[1].includes('@') && arrText[0].length >= 10) {
      setForm({ ...form, email: arrText[1], phone: arrText[0] });
    } else
      setMessages(prev => [
        ...prev,
        { message: 'Ponga datos valids', owner: 'error' },
      ]);
  }

  setText('');
};

// Put new lines
export const renderLines = (text: string) =>
  text.split('\n').map((value, index) => <p key={index}>{value}</p>);
