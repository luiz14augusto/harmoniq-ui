import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { light, dark } from './tokens';
const meta = {
    title: 'Foundation/Tokens',
    tags: ['autodocs']
};
export default meta;
const ColorGrid = ({ colors }) => (_jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }, children: Object.entries(colors).map(([k, v]) => (_jsxs("div", { style: { border: '1px solid #e9ecef', borderRadius: 10, overflow: 'hidden' }, children: [_jsx("div", { style: { height: 56, background: v } }), _jsxs("div", { style: { padding: 8, fontSize: 12 }, children: [_jsx("strong", { children: k }), _jsx("div", { style: { opacity: .7 }, children: v })] })] }, k))) }));
export const Tokens = {
    render: () => (_jsxs("div", { style: { display: 'grid', gap: 24 }, children: [_jsxs("section", { children: [_jsx("h3", { children: "Light Colors" }), _jsx(ColorGrid, { colors: light.colors })] }), _jsxs("section", { children: [_jsx("h3", { children: "Dark Colors" }), _jsx(ColorGrid, { colors: dark.colors })] }), _jsxs("section", { children: [_jsx("h3", { children: "Radii" }), _jsx("pre", { children: JSON.stringify(light.radii, null, 2) })] }), _jsxs("section", { children: [_jsx("h3", { children: "Spacing" }), _jsx("pre", { children: JSON.stringify(light.spacing, null, 2) })] })] }))
};
