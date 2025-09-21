import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { TextArea } from './TextArea';
import { ThemeProvider } from '../../theme/ThemeProvider';
test('renders textarea with label', () => {
    render(_jsx(ThemeProvider, { children: _jsx(TextArea, { label: "Message" }) }));
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
});
