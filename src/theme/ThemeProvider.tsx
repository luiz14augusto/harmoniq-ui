import React from 'react';
import { ThemeProvider as SCThemeProvider, createGlobalStyle } from 'styled-components';
import { light, dark, DS } from './tokens';

export const ThemeProvider: React.FC<{ children: React.ReactNode; mode?: 'light'|'dark' }> = ({ children, mode = 'light' }) => {
  const theme: DS = mode === 'dark' ? dark : light;
  const Global = createGlobalStyle`
    :root { color-scheme: ${mode}; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: ${theme.colors.bg}; color: ${theme.colors.text}; }
  `;
  return <SCThemeProvider theme={theme}><Global />{children}</SCThemeProvider>;
};
