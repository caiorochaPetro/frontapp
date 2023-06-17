import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../index';

describe('Login', () => {
  it('exibe uma mensagem de sucesso ao fazer login válido', () => {
    const { getByLabelText, getByText } = render(<Login />);
    const usernameInput = getByLabelText('Nome de Usuário no Login');
    const passwordInput = getByLabelText('Senha no login');
    const loginButton = getByText('Faça Login');

    fireEvent.change(usernameInput, { target: { value: 'usuario' } });
    fireEvent.change(passwordInput, { target: { value: 'senha' } });

    fireEvent.click(loginButton);

    const successMessage = getByText('Login bem-sucedido!');
    expect(successMessage).toBeInTheDocument();
  });

  it('exibe uma mensagem de erro ao fazer login inválido', () => {
    const { getByLabelText, getByText } = render(<Login />);
    const usernameInput = getByLabelText('Nome de Usuário no Login');
    const passwordInput = getByLabelText('Senha no login');
    const loginButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'usuario' } });
    fireEvent.change(passwordInput, { target: { value: 'senha_errada' } });

    fireEvent.click(loginButton);

    const errorMessage = getByText('Login inválido!');
    expect(errorMessage).toBeInTheDocument();
  });
});
