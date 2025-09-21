import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const Overlay = styled.div `
  position:fixed; inset:0; background:rgba(0,0,0,.5); display:grid; place-items:center;
`;
const Card = styled.div `
  width:min(560px, 92vw); border-radius:14px; padding:20px;
  background:${({ theme }) => theme.colors.card};
  color:${({ theme }) => theme.colors.text};
`;
export const Modal = ({ open, onClose, title, children }) => {
    if (!open)
        return null;
    return (_jsx(Overlay, { onClick: onClose, role: "dialog", "aria-modal": "true", children: _jsxs(Card, { onClick: (e) => e.stopPropagation(), children: [title && _jsx("h3", { style: { marginTop: 0 }, children: title }), _jsx("div", { children: children })] }) }));
};
