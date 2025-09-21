import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`display:grid; gap:6px;`;
const Label = styled.label` font-size: 12px; opacity:.8; `;
const Field = styled.input`
  width:100%; padding:10px 12px; border-radius:10px;
  /* @ts-ignore */ border:1px solid ${({theme})=>theme.colors.border};
  /* @ts-ignore */ background:${({theme})=>theme.colors.card};
  /* @ts-ignore */ color:${({theme})=>theme.colors.text};
  &:focus{ outline:none; box-shadow:0 0 0 3px rgba(255,107,107,.15) }
`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export const Input: React.FC<InputProps> = ({ label, id, ...rest }) => {
  const inputId = id || React.useId();
  return (
    <Wrap>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <Field id={inputId} {...rest} />
    </Wrap>
  );
};
