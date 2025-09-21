import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from './Modal';
const meta = {
    title: 'Feedback/Modal',
    component: Modal,
    tags: ['autodocs'],
    args: { open: true, title: 'Confirmação' }
};
export default meta;
export const Playground = {
    render: (args) => _jsx(Modal, { ...args, children: "Conte\u00FAdo do modal." })
};
