import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Toast } from './Toast';
import { ThemeProvider } from '../../theme/ThemeProvider';
test('shows toast only when open', () => {
    const { rerender } = render(_jsx(ThemeProvider, { children: _jsx(Toast, { open: false, children: "Hi" }) }));
    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
    rerender(_jsx(ThemeProvider, { children: _jsx(Toast, { open: true, children: "Hi" }) }));
    expect(screen.getByText('Hi')).toBeInTheDocument();
});
