import React, { ComponentType, useEffect, useRef, useState } from 'react';
import { handleChange, handleSubmit, renderLines } from './chat.utils';
import style from './sass/Chat.module.scss';
import { FormType } from 'types/form';

const Chat: ComponentType = () => {
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<Array<string>>([]);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  });

  return (
    <main className={style.chat} ref={chatRef}>
      {messages.length > 0 &&
        messages.map((value, key) => {
          return (
            <section className={style.message} key={key}>
              {renderLines(value)}
            </section>
          );
        })}
      <form
        className={style.chat__text}
        onSubmit={e => handleSubmit(e, text, setMessages, setText)}
        role="form"
      >
        <textarea
          data-testid="textarea"
          onChange={e => handleChange(e, setText)}
          value={text}
          placeholder="Ponga aqui sus datos"
        />
        <button data-testid="button">Enviar</button>
      </form>
    </main>
  );
};

export default Chat;
