import React from 'react';
import styled from 'styled-components';

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost';
const Base = styled.button<{ $variant: Variant }>`
  border: 0; border-radius: 10px; padding: 8px 16px; font-weight: 600;
  cursor: pointer; display:inline-flex; align-items:center; gap:8px;
  color: ${({theme, $variant}) => $variant==='secondary'||$variant==='ghost' ? theme.colors.text : '#fff'};
  background: ${({theme, $variant}) => (
    $variant==='primary' ? theme.colors.primary :
    $variant==='secondary' ? theme.colors.muted :
    $variant==='danger' ? theme.colors.danger : 'transparent'
  )};
  border: ${({$variant, theme}) => $variant==='ghost' ? `1px solid ${theme.colors.border}` : '0'};
  &:disabled { opacity:.6; cursor:not-allowed; }
  &:focus-visible { outline:none; box-shadow: 0 0 0 3px rgba(255,107,107,.18); }
`;
export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; isLoading?: boolean; loadingLabel?: string }
> = ({ variant='primary', isLoading, loadingLabel='Loading', children, ...rest }) => (
  <Base $variant={variant} disabled={isLoading || rest.disabled} aria-busy={!!isLoading} {...rest}>
    <span>{isLoading ? loadingLabel : children}</span>
  </Base>
);
