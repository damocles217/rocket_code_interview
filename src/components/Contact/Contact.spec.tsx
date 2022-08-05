import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Contact from './Contact';

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

describe('Contact Component', () => {
  it('Must render the contact component', () => {
    act(() => {
      render(<Contact />, { container });
    });

    const header = screen.getByTestId('contact');
    expect(header.children.length).toBeGreaterThan(0);
    expect(screen.getByText(/Celular/i)).toBeInTheDocument();
  });
});
