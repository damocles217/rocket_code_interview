import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';

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

describe('Header Component', () => {
  it('Must render the header component', () => {
    act(() => {
      render(<Header />, { container });
    });

    const header = screen.getByTestId('header');
    expect(header.children.length).toBeGreaterThan(0);
    expect(screen.getByText(/Formulario /i)).toBeInTheDocument();
  });
});
