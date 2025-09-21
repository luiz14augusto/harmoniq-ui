import { render, screen } from '@testing-library/react';
import React from 'react';
import { CircularLoading } from './CircularLoading';
import { ThemeProvider } from '../../theme/ThemeProvider';

const wrap = (ui: React.ReactElement) => render(<ThemeProvider>{ui}</ThemeProvider>);

test('renders spinning donut by default', () => {
  wrap(<CircularLoading aria-label="Loading" />);
  const el = screen.getByRole('status', { name: /loading/i });
  expect(el).toBeInTheDocument();
});

test('renders determinate arc when value is provided', () => {
  wrap(<CircularLoading aria-label="Progress" value={75} />);
  expect(screen.getByRole('status', { name: /progress/i })).toBeInTheDocument();
});
