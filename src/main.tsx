import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './theme/ThemeProvider';
import { Button, Input, TextArea } from './components';
const App = () => (
  <ThemeProvider>
    <div style={{ padding: 24, display:'grid', gap:16 }}>
      <h1>Harmoniq UI</h1>
      <Button>Primary</Button>
      <Input label="E-mail" placeholder="you@example.com" />
      <TextArea label="Mensagem" placeholder="Escreva algo..." />
    </div>
  </ThemeProvider>
);
createRoot(document.getElementById('root')!).render(<App />);
