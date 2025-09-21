import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { ThemeProvider } from '../../theme/ThemeProvider';
test('associates label and input by id', () => {
    render(_jsx(ThemeProvider, { children: _jsx(Input, { label: "Email", placeholder: "you@example.com" }) }));
    const field = screen.getByLabelText('Email');
    expect(field).toHaveAttribute('placeholder', 'you@example.com');
});
