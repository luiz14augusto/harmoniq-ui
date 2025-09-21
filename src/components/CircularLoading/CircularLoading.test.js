import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { CircularLoading } from './CircularLoading';
import { ThemeProvider } from '../../theme/ThemeProvider';
const wrap = (ui) => render(_jsx(ThemeProvider, { children: ui }));
test('renders spinning donut by default', () => {
    wrap(_jsx(CircularLoading, { "aria-label": "Loading" }));
    const el = screen.getByRole('status', { name: /loading/i });
    expect(el).toBeInTheDocument();
});
test('renders determinate arc when value is provided', () => {
    wrap(_jsx(CircularLoading, { "aria-label": "Progress", value: 75 }));
    expect(screen.getByRole('status', { name: /progress/i })).toBeInTheDocument();
});
