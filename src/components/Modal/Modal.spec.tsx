import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FormType } from 'types/form';
import Modal from './Modal';

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

describe('Modal Component', () => {
  it('Must render the modal component', () => {
    const form: FormType = {
      born_date: '1 1 1',
      email: 'jose123@gmail.com',
      fullname: 'jose',
      phone: '2222222222',
    };
    act(() => {
      render(<Modal data={form} />, { container });
    });

    expect(screen.getByText(/jose123@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/1 1 1/i)).toBeInTheDocument();
  });

  it('Must render the modal component again', () => {
    const form: FormType = {
      born_date: '2 2 2',
      email: 'pepe@gmail.com',
      fullname: 'pepe',
      phone: '1111111111',
    };
    act(() => {
      render(<Modal data={form} />, { container });
    });

    expect(screen.getByText(/2 2 2/i)).toBeInTheDocument();
    expect(screen.getByText(/pepe@gmail.com/i)).toBeInTheDocument();
  });
});
