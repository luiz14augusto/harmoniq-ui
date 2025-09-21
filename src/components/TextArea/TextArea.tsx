import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`display:grid; gap:6px;`;
const Label = styled.label` font-size: 12px; opacity:.8; `;
const Field = styled.textarea`
  width:100%; padding:10px 12px; min-height:96px; border-radius:10px; resize:vertical;
  border:1px solid ${({theme})=>theme.colors.border};
  background:${({theme})=>theme.colors.card};
  color:${({theme})=>theme.colors.text};
  &:focus{ outline:none; box-shadow:0 0 0 3px rgba(255,107,107,.15) }
`;

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}
export const TextArea: React.FC<TextAreaProps> = ({ label, id, ...rest }) => {
  const textId = id || React.useId();
  return (
    <Wrap>
      {label && <Label htmlFor={textId}>{label}</Label>}
      <Field id={textId} {...rest} />
    </Wrap>
  );
};
