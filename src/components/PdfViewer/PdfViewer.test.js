import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { PdfViewer } from './PdfViewer';
import { ThemeProvider } from '../../theme/ThemeProvider';
test('renders embed with src', () => {
    render(_jsx(ThemeProvider, { children: _jsx(PdfViewer, { src: "https://example.com/sample.pdf", title: "Doc" }) }));
    expect(screen.getByLabelText('Doc')).toBeInTheDocument();
});
