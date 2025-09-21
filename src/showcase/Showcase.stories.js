import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { Modal } from '../components/Modal';
import { Drawer } from '../components/Drawer';
import { Toast } from '../components/Toast';
const meta = {
    title: 'Showcase/All Components',
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' }
};
export default meta;
export const Overview = {
    render: () => {
        const [openModal, setOpenModal] = React.useState(false);
        const [openDrawer, setOpenDrawer] = React.useState(false);
        const [openToast, setOpenToast] = React.useState(false);
        const [loading, setLoading] = React.useState(false);
        return (_jsxs("div", { style: { padding: 24, display: 'grid', gap: 24, gridTemplateColumns: '1fr', maxWidth: 960, margin: '0 auto' }, children: [_jsxs("section", { children: [_jsx("h2", { children: "Buttons" }), _jsxs("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap' }, children: [_jsx(Button, { children: "Primary" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "danger", children: "Danger" }), _jsx(Button, { variant: "ghost", children: "Ghost" }), _jsx(Button, { isLoading: loading, onClick: () => { setLoading(true); setTimeout(() => setLoading(false), 1500); }, children: "Async Action" })] })] }), _jsxs("section", { children: [_jsx("h2", { children: "Inputs" }), _jsxs("div", { style: { display: 'grid', gap: 12 }, children: [_jsx(Input, { label: "Email", placeholder: "you@example.com" }), _jsx(TextArea, { label: "Message", placeholder: "Say hi..." })] })] }), _jsxs("section", { children: [_jsx("h2", { children: "Overlays" }), _jsxs("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap' }, children: [_jsx(Button, { onClick: () => setOpenModal(true), children: "Open Modal" }), _jsx(Button, { onClick: () => setOpenDrawer(true), children: "Open Drawer" }), _jsx(Button, { onClick: () => { setOpenToast(true); setTimeout(() => setOpenToast(false), 1400); }, children: "Show Toast" })] }), _jsx(Modal, { open: openModal, onClose: () => setOpenModal(false), title: "Confirm", children: "Content in a modal" }), _jsx(Drawer, { open: openDrawer, onClose: () => setOpenDrawer(false), title: "Menu", children: "Items inside the drawer" }), _jsx(Toast, { open: openToast, children: "Teste!" })] })] }));
    }
};
