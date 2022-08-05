import { Dispatch, useState, SetStateAction } from 'react';
import { FormType } from 'types/form';

export const useChat = (): [
  text: string,
  form: FormType,
  final: boolean,
  messages: Array<{ owner: string; message: string }>,
  setText: Dispatch<SetStateAction<string>>,
  setForm: Dispatch<SetStateAction<FormType>>,
  setFinal: Dispatch<SetStateAction<boolean>>,
  setMessages: Dispatch<
    SetStateAction<Array<{ owner: string; message: string }>>
  >,
] => {
  const [text, setText] = useState<string>('');
  const [form, setForm] = useState<FormType>({
    born_date: '',
    email: '',
    fullname: '',
    phone: '',
  });
  const [final, setFinal] = useState<boolean>(false);

  const [messages, setMessages] = useState<
    Array<{ owner: string; message: string }>
  >([]);

  return [text, form, final, messages, setText, setForm, setFinal, setMessages];
};
