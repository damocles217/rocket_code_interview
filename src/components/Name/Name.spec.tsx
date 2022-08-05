import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Name from './Name';

jest.mock('../../assets/profile.jpeg', () => {
  return jest.fn(() => '');
});

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

describe('Name Component', () => {
  it('Must render the Name component', () => {
    act(() => {
      render(<Name />, { container });
    });

    const header = screen.getByTestId('name');
    expect(header.children.length).toBeGreaterThan(0);
    expect(screen.getByText(/Segundo/i)).toBeInTheDocument();
  });
});
