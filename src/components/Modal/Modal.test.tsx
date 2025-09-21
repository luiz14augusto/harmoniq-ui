import { render, screen } from '@testing-library/react';
import React from 'react';
import { Modal } from './Modal';
import { ThemeProvider } from '../../theme/ThemeProvider';

test('is not visible when open=false', () => {
  const { container } = render(<ThemeProvider><Modal open={false} title="X">Hi</Modal></ThemeProvider>);
  expect(container).toBeEmptyDOMElement();
});

test('renders dialog when open', () => {
  render(<ThemeProvider><Modal open title="Confirm">Body</Modal></ThemeProvider>);
  const dialog = screen.getByRole('dialog');
  expect(dialog).toBeInTheDocument();
  expect(screen.getByText('Body')).toBeInTheDocument();
});
