import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Error from './Error';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Error Component', () => {
  it('Must render the error component', () => {
    act(() => {
      render(<Error message="testing" />, { container });
    });

    expect(screen.getByText(/testing/i)).toBeInTheDocument();
  });

  it('Must render the error component again', () => {
    act(() => {
      render(<Error message="no test" />, { container });
    });

    expect(screen.getByText(/no test/i)).toBeInTheDocument();
  });
});
