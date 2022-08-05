import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Born from './Born';

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

describe('Born Component', () => {
  it('Must render the born component', () => {
    act(() => {
      render(<Born />, { container });
    });

    const header = screen.getByTestId('born');
    expect(header.children.length).toBeGreaterThan(0);
    expect(screen.getByText(/Mes/i)).toBeInTheDocument();
  });
});
