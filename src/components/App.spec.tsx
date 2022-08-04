import { act, screen, render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

jest.mock('./Header/Header', () => {
  return jest.fn(() => <div id="mock">mocked</div>);
});

let container: HTMLElement | null = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App Component', () => {
  it('Must render the header mocked', () => {
    act(() => {
      render(<App />, { container: container });
    });

    expect(screen.getByText(/mocked/i)).toBeInTheDocument();
  });
});
