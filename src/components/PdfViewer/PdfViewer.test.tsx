import { render, screen } from '@testing-library/react';
import React from 'react';
import { PdfViewer } from './PdfViewer';
import { ThemeProvider } from '../../theme/ThemeProvider';

test('renders embed with src', () => {
  render(<ThemeProvider><PdfViewer src="https://example.com/sample.pdf" title="Doc" /></ThemeProvider>);
  expect(screen.getByLabelText('Doc')).toBeInTheDocument();
});
