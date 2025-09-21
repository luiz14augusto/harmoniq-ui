import React from 'react';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`from { transform: translateX(100%);} to { transform: translateX(0);} `;
const Overlay = styled.div`position:fixed; inset:0; background:rgba(0,0,0,.4);`;
const Panel = styled.aside`
  position:fixed; top:0; right:0; height:100%; width:min(420px, 92vw);
  background:${({theme})=>theme.colors.card};
  color:${({theme})=>theme.colors.text};
  box-shadow: -8px 0 24px rgba(0,0,0,.12);
  animation: ${slide} .25s ease-out;
  padding:16px;
`;
export interface DrawerProps { open: boolean; onClose?: () => void; title?: string; children?: React.ReactNode; }
export const Drawer: React.FC<DrawerProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <Panel onClick={(e)=>e.stopPropagation()}>
        {title && <h3 style={{ marginTop:0 }}>{title}</h3>}
        {children}
      </Panel>
    </Overlay>
  );
};
