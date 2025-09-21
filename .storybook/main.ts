import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-docs"],
  framework: { name: "@storybook/react-vite", options: {} },
  staticDirs: ["./public"],
  docs: { autodocs: true }
};
export default config;
