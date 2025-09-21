import { jsx as _jsx } from "react/jsx-runtime";
import { Drawer } from './Drawer';
const meta = {
    title: 'Feedback/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    args: { open: true, title: 'Menu' }
};
export default meta;
export const Playground = { render: (args) => _jsx(Drawer, { ...args, children: "Itens do menu" }) };
