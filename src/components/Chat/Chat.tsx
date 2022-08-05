import React, { ComponentType, useEffect, useRef, memo, lazy } from 'react';
import {
  handleChange,
  handleSubmit,
  renderLines,
  handleClick,
} from './chat.utils';
import style from './sass/Chat.module.scss';
const Name = lazy(() => import('../Name/Name'));
const Contact = lazy(() => import('../Contact/Contact'));
const Born = lazy(() => import('../Born/Born'));
const Error = lazy(() => import('../Error/Error'));
const Modal = lazy(() => import('../Modal/Modal'));
import { useChat } from '@src/hooks/useChat';

const Chat: ComponentType = () => {
  const [text, form, final, messages, setText, setForm, setFinal, setMessages] =
    useChat();

  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [text, form]);

  return (
    <main className={style.chat} ref={chatRef}>
      <Name />
      {messages.length > 0 &&
        messages.map((value, key) => {
          if (value.owner == 'me')
            return <Message value={value.message} key={key} />;
          if (value.message == 'date') return <Born key={key} />;
          if (value.message == 'contact') return <Contact key={key} />;
          if (value.owner == 'error')
            return <Error message={value.message} key={key} />;
        })}

      {form.email && <Message value="Si tus datos son correctos envialos" />}

      <form
        className={style.chat__text}
        onSubmit={e =>
          handleSubmit(e, text, setMessages, setText, form, setForm)
        }
        role="form"
      >
        {!form.email && (
          <textarea
            data-testid="textarea"
            onChange={e => handleChange(e, setText)}
            value={text}
            placeholder="Ponga aqui sus datos"
          />
        )}

        {form.email ? (
          <button
            data-testid="button"
            onClick={() => {
              handleClick(form, setFinal);
            }}
          >
            Iniciar
          </button>
        ) : (
          <button data-testid="button">Siguiente</button>
        )}
      </form>

      {final && <Modal data={form} />}
    </main>
  );
};
const Message = memo(function Message({ value }: { value: string }) {
  return <section className={style.message}>{renderLines(value)}</section>;
});

export default Chat;
