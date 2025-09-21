import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Box = styled.div `
  position: fixed; right: 16px; bottom: 16px; border-radius: 10px; padding: 10px 12px;
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  border:1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 18px rgba(0,0,0,.12);
`;
export const Toast = ({ open, children }) => {
    if (!open)
        return null;
    return _jsx(Box, { role: "status", "aria-live": "polite", children: children });
};
