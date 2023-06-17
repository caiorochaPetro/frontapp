import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {LoginForm} from '../index';

describe('LoginForm', () => {
  it('exibe a mensagem de boas-vindas correta após o login', () => {
    const { getByLabelText, getByText, queryByText } = render(<LoginForm />);

    // Encontrar os campos de entrada e o botão de login
    const usernameInput = getByLabelText('Nome de Usuário');
    const passwordInput = getByLabelText('Senha');
    const loginButton = getByText('Login');

    // Simular o preenchimento dos campos de entrada
    fireEvent.change(usernameInput, { target: { value: 'usuario123' } });
    fireEvent.change(passwordInput, { target: { value: 'senha123' } });

    // Simular o clique no botão de login
    fireEvent.click(loginButton);

    // Verificar se a mensagem de boas-vindas é exibida corretamente
    const welcomeMessage = getByText('Bem-vindo, usuario123!');
    expect(welcomeMessage).toBeInTheDocument();

    // Verificar se os campos de entrada foram limpos após o login
    expect(usernameInput.value).toBe('');
    expect(passwordInput.value).toBe('');

    // Verificar se a mensagem de boas-vindas desaparece após alguns segundos
    setTimeout(() => {
      const welcomeMessageAfterTimeout = queryByText('Bem-vindo, usuario123!');
      expect(welcomeMessageAfterTimeout).toBeNull();
    }, 3000);
  });
});