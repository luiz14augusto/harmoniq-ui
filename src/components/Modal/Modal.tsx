import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position:fixed; inset:0; background:rgba(0,0,0,.5); display:grid; place-items:center;
`;
const Card = styled.div`
  width:min(560px, 92vw); border-radius:14px; padding:20px;
  background:${({theme})=>theme.colors.card};
  color:${({theme})=>theme.colors.text};
`;
export interface ModalProps {
  open: boolean; onClose?: () => void; title?: string; children?: React.ReactNode;
}
export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <Overlay onClick={onClose} role="dialog" aria-modal="true">
      <Card onClick={(e)=>e.stopPropagation()}>
        {title && <h3 style={{ marginTop:0 }}>{title}</h3>}
        <div>{children}</div>
      </Card>
    </Overlay>
  );
};
