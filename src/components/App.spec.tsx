import { act, screen, render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

jest.mock('./Header/Header', () => {
  return jest.fn(() => <div id="mock">mocked</div>);
});

jest.mock('./Chat/Chat', () => {
  return jest.fn(() => <div id="mock-chat">chat</div>);
});

let container: HTMLElement | null = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    render(<App />, { container: container });
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App Component', () => {
  it('Must render the mocked header ', async () => {
    expect(await screen.findByText(/mocked/i)).toBeInTheDocument();
  });

  it('Must render the mocked chat', async () => {
    expect(await screen.findByText(/chat/i)).toBeInTheDocument();
  });
});
