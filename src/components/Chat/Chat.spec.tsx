import { render, screen, act, fireEvent } from '@testing-library/react';
import React from 'react';
import Chat from './Chat';

beforeEach(() => {
  act(() => {
    render(<Chat />);
  });
});

describe('Chat component', () => {
  it('Render chat component', () => {
    const form = screen.getByRole('form');

    expect(form.children.length).toBe(2);
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });

  it('Must set an unique value in the messages', () => {
    const textTest = screen.getByTestId('textarea');
    const button = screen.getByRole('button', { name: /Enviar/i });

    fireEvent.change(textTest, { target: { value: 'Hi rocket code' } });
    fireEvent.click(button);

    expect(screen.getByText(/Hi rocket code/i)).toBeInTheDocument();
  });

  it('Must set values in the messages', async () => {
    const textTest = screen.getByRole('textbox');
    const button = screen.getByTestId('button');

    fireEvent.change(textTest, { target: { value: 'Hi rocket 1' } });
    fireEvent.click(button);

    fireEvent.change(textTest, { target: { value: 'Hi rocket 2' } });
    fireEvent.click(button);

    fireEvent.change(textTest, { target: { value: 'Hi rocket 3' } });
    fireEvent.click(button);

    expect(screen.getByText(/Hi rocket 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Hi rocket 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Hi rocket 3/i)).toBeInTheDocument();
  });
});
