import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: fixed; right: 16px; bottom: 16px; border-radius: 10px; padding: 10px 12px;
  /* @ts-ignore */ background: ${({theme})=>theme.colors.card};
  /* @ts-ignore */ color: ${({theme})=>theme.colors.text};
  /* @ts-ignore */ border:1px solid ${({theme})=>theme.colors.border};
  box-shadow: 0 4px 18px rgba(0,0,0,.12);
`;
export const Toast: React.FC<{ open: boolean; children?: React.ReactNode }> = ({ open, children }) => {
  if (!open) return null;
  return <Box role="status" aria-live="polite">{children}</Box>;
};
