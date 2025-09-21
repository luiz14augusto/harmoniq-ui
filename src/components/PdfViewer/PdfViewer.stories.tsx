import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PdfViewer } from './PdfViewer';

const meta: Meta<typeof PdfViewer> = {
  title: 'Data/PdfViewer',
  component: PdfViewer,
  tags: ['autodocs'],
  args: { src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
};
export default meta;
type Story = StoryObj<typeof PdfViewer>;
export const Playground: Story = { args: {} };
