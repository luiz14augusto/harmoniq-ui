import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/theme/ThemeProvider';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: { icon: 'mirror', items: [{value:'light',title:'Light'},{value:'dark',title:'Dark'}] }
    }
  },
  decorators: [
    (Story, ctx) => (
      <ThemeProvider mode={ctx.globals.theme as 'light'|'dark'}>
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: { actions: { argTypesRegex: '^on[A-Z].*' }, controls: { expanded: true } }
};
export default preview;
