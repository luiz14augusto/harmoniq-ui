import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';
import { ThemeProvider } from '../../theme/ThemeProvider';
test('is not visible when open=false', () => {
    const { container } = render(_jsx(ThemeProvider, { children: _jsx(Modal, { open: false, title: "X", children: "Hi" }) }));
    expect(container).toBeEmptyDOMElement();
});
test('renders dialog when open', () => {
    render(_jsx(ThemeProvider, { children: _jsx(Modal, { open: true, title: "Confirm", children: "Body" }) }));
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
});
