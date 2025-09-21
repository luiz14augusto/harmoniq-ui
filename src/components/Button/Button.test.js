import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from '../../theme/ThemeProvider';
const wrap = (ui) => render(_jsx(ThemeProvider, { children: ui }));
test('renders button with text', () => {
    wrap(_jsx(Button, { children: "Click me" }));
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});
