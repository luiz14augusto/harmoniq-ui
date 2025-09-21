import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary','secondary','danger','ghost'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
  args: { variant: 'primary', disabled: false, children: 'Click me' },
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Playground: Story = { args: {} };
export const Loading: Story = { args: { isLoading: true, children: 'Save' } };
