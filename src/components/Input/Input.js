import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
const Wrap = styled.div `display:grid; gap:6px;`;
const Label = styled.label ` font-size: 12px; opacity:.8; `;
const Field = styled.input `
  width:100%; padding:10px 12px; border-radius:10px;
  border:1px solid ${({ theme }) => theme.colors.border};
  background:${({ theme }) => theme.colors.card};
  color:${({ theme }) => theme.colors.text};
  &:focus{ outline:none; box-shadow:0 0 0 3px rgba(255,107,107,.15) }
`;
export const Input = ({ label, id, ...rest }) => {
    const inputId = id || React.useId();
    return (_jsxs(Wrap, { children: [label && _jsx(Label, { htmlFor: inputId, children: label }), _jsx(Field, { id: inputId, ...rest })] }));
};
