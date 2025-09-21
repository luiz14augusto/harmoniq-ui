import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: { open: true, title: 'Confirmação' }
};
export default meta;
type Story = StoryObj<typeof Modal>;
export const Playground: Story = {
  render: (args) => <Modal {...args}>Conteúdo do modal.</Modal>
};
