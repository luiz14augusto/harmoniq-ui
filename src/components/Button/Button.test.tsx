import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';
import { ThemeProvider } from '../../theme/ThemeProvider';

const wrap = (ui: React.ReactElement) => render(<ThemeProvider>{ui}</ThemeProvider>);

test('renders button with text', () => {
  wrap(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});

