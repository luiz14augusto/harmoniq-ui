import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextArea } from './TextArea';
const meta: Meta<typeof TextArea> = {
  title: 'Inputs/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: { label: 'Mensagem', placeholder: 'Escreva algo...' }
};
export default meta;
type Story = StoryObj<typeof TextArea>;
export const Playground: Story = { args: {} };
