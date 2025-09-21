import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './theme/ThemeProvider';
import { Button, Input, TextArea } from './components';
const App = () => (_jsx(ThemeProvider, { children: _jsxs("div", { style: { padding: 24, display: 'grid', gap: 16 }, children: [_jsx("h1", { children: "Harmoniq UI" }), _jsx(Button, { children: "Primary" }), _jsx(Input, { label: "E-mail", placeholder: "you@example.com" }), _jsx(TextArea, { label: "Mensagem", placeholder: "Escreva algo..." })] }) }));
createRoot(document.getElementById('root')).render(_jsx(App, {}));
