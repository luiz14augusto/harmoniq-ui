import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';
const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  args: { label: 'E-mail', placeholder: 'you@example.com' }
};
export default meta;
type Story = StoryObj<typeof Input>;
export const Playground: Story = { args: {} };
