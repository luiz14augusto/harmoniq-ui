import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  width:100%; height:480px; border-radius:10px; overflow:hidden;
  border:1px solid ${({theme})=>theme.colors.border};
  background:#fff;
`;
export interface PdfViewerProps { src: string; title?: string }
export const PdfViewer: React.FC<PdfViewerProps> = ({ src, title }) => {
  return (
    <Frame aria-label={title || 'PDF'}>
      <embed src={src} type="application/pdf" width="100%" height="100%" />
    </Frame>
  );
};
