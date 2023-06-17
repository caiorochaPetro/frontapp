import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Counter} from '../index';

describe('Counter', () => {
  it('exibe o número inicial corretamente', () => {
    const { getByText } = render(<Counter initialValue={5} />);
    const counterValue = getByText('Número: 5');
    expect(counterValue).toBeInTheDocument();
  });

  it('incrementa o número ao clicar no botão de incremento', () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const incrementButton = getByText('Incrementar');
    fireEvent.click(incrementButton);
    const counterValue = getByText('Número: 1');
    expect(counterValue).toBeInTheDocument();
  });

  it('decrementa o número ao clicar no botão de decremento', () => {
    const { getByText } = render(<Counter initialValue={3} />);
    const decrementButton = getByText('Decrementar');
    fireEvent.click(decrementButton);
    const counterValue = getByText('Número: 2');
    expect(counterValue).toBeInTheDocument();
  });
});