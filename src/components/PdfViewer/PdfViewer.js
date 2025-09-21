import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Frame = styled.div `
  width:100%; height:480px; border-radius:10px; overflow:hidden;
  border:1px solid ${({ theme }) => theme.colors.border};
  background:#fff;
`;
export const PdfViewer = ({ src, title }) => {
    return (_jsx(Frame, { "aria-label": title || 'PDF', children: _jsx("embed", { src: src, type: "application/pdf", width: "100%", height: "100%" }) }));
};
