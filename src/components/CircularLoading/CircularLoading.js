import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { keyframes } from 'styled-components';
import { useTheme } from 'styled-components';
const spin = keyframes `to{ transform: rotate(360deg); }`;
const sizeMap = { small: 16, medium: 24, large: 36 };
const Wrap = styled.div `display:inline-grid; place-items:center; width:${p => p.$dim}px; height:${p => p.$dim}px;`;
const Donut = styled.div `
  width:${p => p.$dim}px; height:${p => p.$dim}px; border-radius:50%;
  box-shadow: inset 0 0 0 ${p => p.$thick}px ${p => p.$base};
  position:relative; background: transparent;
`;
const Sweep = styled.div `
  position:absolute; inset:0; border-radius:50%;
  mask: radial-gradient(circle at center, transparent calc(50% - ${p => p.$thick}px), #000 calc(50% - ${p => p.$thick}px));
  background: conic-gradient(from 0deg, ${p => p.$accent} 0 90deg, transparent 90deg 360deg);
  animation: ${spin} ${p => p.$duration}ms linear infinite;
`;
const Arc = styled.div `
  position:absolute; inset:0; border-radius:50%;
  mask: radial-gradient(circle at center, transparent calc(50% - ${p => p.$thick}px), #000 calc(50% - ${p => p.$thick}px));
  background: conic-gradient(${p => p.$accent} 0 ${p => p.$value}%, transparent ${p => p.$value}% 100%);
`;
export const CircularLoading = ({ size = 'medium', variant = 'primary', thicknessPx, durationMs = 700, value, 'aria-label': label = 'Loading', ...rest }) => {
    const theme = useTheme();
    const accent = variant === 'green' ? (theme?.colors?.success ?? '#2ED573') : (theme?.colors?.primary ?? '#FF6B6B');
    const base = theme?.colors?.border ?? '#E9ECEF';
    const dim = sizeMap[size];
    const thick = typeof thicknessPx === 'number' ? thicknessPx : 4;
    return (_jsxs(Wrap, { "$dim": dim, role: "status", "aria-live": "polite", "aria-label": label, ...rest, children: [_jsx(Donut, { "$dim": dim, "$thick": thick, "$base": base }), typeof value === 'number'
                ? _jsx(Arc, { "$thick": thick, "$accent": accent, "$value": Math.max(0, Math.min(100, value)) })
                : _jsx(Sweep, { "$thick": thick, "$accent": accent, "$duration": durationMs })] }));
};
