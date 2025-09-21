import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Drawer } from './Drawer';
import { ThemeProvider } from '../../theme/ThemeProvider';
test('renders drawer when open', () => {
    render(_jsx(ThemeProvider, { children: _jsx(Drawer, { open: true, title: "Menu", children: "Items" }) }));
    expect(screen.getByText('Items')).toBeInTheDocument();
});
