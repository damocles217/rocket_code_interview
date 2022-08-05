import { render, screen, act, fireEvent } from '@testing-library/react';
import React from 'react';
import Chat from './Chat';

jest.mock('../Born/Born', () => {
  return jest.fn(() => <div>mocked</div>);
});

jest.mock('../Contact/Contact', () => {
  return jest.fn(() => <div>mock contact</div>);
});
jest.mock('../Name/Name', () => {
  return jest.fn(() => <div>mock name</div>);
});

beforeEach(() => {
  act(() => {
    render(<Chat />);
  });
});

describe('Chat component', () => {
  it('Render chat component', () => {
    const form = screen.getByRole('form');

    expect(form.children.length).toBe(2);
    expect(screen.getByText(/Siguiente/i)).toBeInTheDocument();
  });

  it('Must set an unique value in the messages', () => {
    const textTest = screen.getByTestId('textarea');
    const button = screen.getByRole('button', { name: /Siguiente/i });

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

  it('Must render and show the components mocked', () => {
    const textTest = screen.getByRole('textbox');
    const button = screen.getByTestId('button');

    fireEvent.change(textTest, { target: { value: 'Hi rocket 1' } });
    fireEvent.click(button);

    fireEvent.change(textTest, { target: { value: 'Hi rocket 2' } });
    fireEvent.click(button);
    expect(screen.getByText(/mock name/i)).toBeInTheDocument();
    expect(screen.getByText(/mocked/i)).toBeInTheDocument();
  });
});
