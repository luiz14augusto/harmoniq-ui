import { render, screen } from '@testing-library/react';
import React from 'react';
import { Drawer } from './Drawer';
import { ThemeProvider } from '../../theme/ThemeProvider';

test('renders drawer when open', () => {
  render(<ThemeProvider><Drawer open title="Menu">Items</Drawer></ThemeProvider>);
  expect(screen.getByText('Items')).toBeInTheDocument();
});
