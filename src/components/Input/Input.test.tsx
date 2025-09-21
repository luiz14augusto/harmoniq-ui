import { render, screen } from '@testing-library/react';
import React from 'react';
import { Input } from './Input';
import { ThemeProvider } from '../../theme/ThemeProvider';

test('associates label and input by id', () => {
  render(<ThemeProvider><Input label="Email" placeholder="you@example.com" /></ThemeProvider>);
  const field = screen.getByLabelText('Email');
  expect(field).toHaveAttribute('placeholder', 'you@example.com');
});
