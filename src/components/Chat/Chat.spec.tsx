import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import React, { Suspense } from 'react';
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
    render(
      <Suspense fallback={'loading'}>
        <Chat />
      </Suspense>,
    );
  });
});

describe('Chat component', () => {
  it('Render chat component', async () => {
    const form = await screen.findByRole('form');

    expect(form.children.length).toBe(2);
    expect(await screen.findByText(/Siguiente/i)).toBeInTheDocument();
  });

  it('Must set an unique value in the messages', async () => {
    const textTest = await screen.findByTestId('textarea');
    const button = await screen.findByRole('button', { name: /Siguiente/i });

    fireEvent.change(textTest, { target: { value: 'Hi rocket code' } });
    fireEvent.click(button);

    expect(await screen.findByText(/Hi rocket code/i)).toBeInTheDocument();
  });

  it('Must set values in the messages', async () => {
    const textTest = await screen.findByRole('textbox');
    const button = await screen.findByTestId('button');

    fireEvent.change(textTest, { target: { value: 'Hi rocket 1' } });
    await waitFor(() => fireEvent.click(button));

    fireEvent.change(textTest, { target: { value: 'Hi rocket 2' } });
    await waitFor(() => fireEvent.click(button));

    fireEvent.change(textTest, { target: { value: 'Hi rocket 3' } });
    await waitFor(() => fireEvent.click(button));

    expect(await screen.findByText(/Hi rocket 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Hi rocket 2/i)).toBeInTheDocument();
    expect(await screen.findByText(/Hi rocket 3/i)).toBeInTheDocument();
  });

  it('Must render and show the components mocked', async () => {
    const textTest = await screen.findByRole('textbox');
    const button = await screen.findByTestId('button');

    fireEvent.change(textTest, { target: { value: 'Hi rocket 1' } });
    fireEvent.click(button);

    fireEvent.change(textTest, { target: { value: 'Hi rocket 2' } });
    fireEvent.click(button);
    expect(screen.getByText(/mock name/i)).toBeInTheDocument();
    expect(screen.getByText(/mocked/i)).toBeInTheDocument();
  });
});
