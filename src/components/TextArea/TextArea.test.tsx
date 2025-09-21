import { render, screen } from '@testing-library/react';
import React from 'react';
import { TextArea } from './TextArea';
import { ThemeProvider } from '../../theme/ThemeProvider';

test('renders textarea with label', () => {
  render(<ThemeProvider><TextArea label="Message" /></ThemeProvider>);
  expect(screen.getByLabelText('Message')).toBeInTheDocument();
});
