import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';

export const handleChange = (
  e: ChangeEvent<HTMLTextAreaElement>,
  setState: Dispatch<SetStateAction<string>>,
) => {
  setState(e.target.value);
};

export const handleSubmit = (
  e: FormEvent,
  text: string,
  setMessages: Dispatch<SetStateAction<Array<string>>>,
  setText: Dispatch<SetStateAction<string>>,
) => {
  e.preventDefault();
  text = text.trim();
  text = text.replace(/ +/, ' ');
  if (text.length > 0) setMessages(prev => [...prev, text]);
  setText('');
};

// Put new lines
export const renderLines = (text: string) =>
  text.split('\n').map((value, index) => <p key={index}>{value}</p>);
