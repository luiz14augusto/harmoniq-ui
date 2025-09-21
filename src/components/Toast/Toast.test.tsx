import { render, screen } from '@testing-library/react';
import React from 'react';
import { Toast } from './Toast';
import { ThemeProvider } from '../../theme/ThemeProvider';

test('shows toast only when open', () => {
  const { rerender } = render(<ThemeProvider><Toast open={false}>Hi</Toast></ThemeProvider>);
  expect(screen.queryByText('Hi')).not.toBeInTheDocument();
  rerender(<ThemeProvider><Toast open>Hi</Toast></ThemeProvider>);
  expect(screen.getByText('Hi')).toBeInTheDocument();
});
