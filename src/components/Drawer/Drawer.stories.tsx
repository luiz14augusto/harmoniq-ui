import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Feedback/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  args: { open: true, title: 'Menu' }
};
export default meta;
type Story = StoryObj<typeof Drawer>;
export const Playground: Story = { render: (args) => <Drawer {...args}>Itens do menu</Drawer> };
