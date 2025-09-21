import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const kindFromName = (name) => {
    const ext = name.toLowerCase().split('.').pop() || '';
    if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext))
        return 'image';
    if (ext === 'pdf')
        return 'pdf';
    if (['zip', 'rar', '7z', 'gz', 'tar'].includes(ext))
        return 'zip';
    if (['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'].includes(ext))
        return 'doc';
    if (['txt', 'md', 'rtf'].includes(ext))
        return 'txt';
    return 'other';
};
export const FileIcon = ({ kind, size = 24 }) => {
    const color = { image: '#4dabf7', pdf: '#ff6b6b', zip: '#845ef7', doc: '#339af0', txt: '#868e96', other: '#adb5bd' }[kind];
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: size, height: size, style: { color }, "aria-hidden": true, children: [_jsx("rect", { x: "4", y: "3", width: "14", height: "18", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }), _jsx("path", { d: "M14 3v5h5", fill: "none", stroke: "currentColor", strokeWidth: "2" }), _jsx("circle", { cx: "18", cy: "18", r: "3", fill: "currentColor", opacity: "0.15" })] }));
};
