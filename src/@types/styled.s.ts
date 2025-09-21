// src/@types/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      onPrimary: string;
      secondary: string;
      onSecondary: string;
      background: string;
      surface: string;
      border: string;
      success: string;
      warning: string;
      danger: string;
      muted: string;
      text: string;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;
      pill: string;
    };
    spacing: (n: number) => string;
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    zIndex: {
      modal: number;
      toast: number;
      dropdown: number;
    };
  }
}
