import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: { open: true }
};
export default meta;
type Story = StoryObj<typeof Toast>;
export const Playground: Story = { args: { children: 'Teste!' } };
