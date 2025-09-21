export const theme = {
    colors: {
        primary: '#3B82F6',
        onPrimary: '#FFFFFF',
        secondary: '#0EA5E9',
        onSecondary: '#FFFFFF',
        background: '#0B1220',
        surface: '#111827',
        border: '#1F2937',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        muted: '#9CA3AF',
        text: '#E5E7EB'
    },
    radii: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        pill: '999px'
    },
    spacing: (n) => `${n * 4}px`,
    shadows: {
        sm: '0 1px 2px rgba(0,0,0,0.2)',
        md: '0 4px 12px rgba(0,0,0,0.25)',
        lg: '0 12px 30px rgba(0,0,0,0.35)'
    },
    zIndex: {
        modal: 1300,
        toast: 1400,
        dropdown: 1500
    }
};
