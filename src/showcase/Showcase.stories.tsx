import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { Modal } from '../components/Modal';
import { Drawer } from '../components/Drawer';
import { Toast } from '../components/Toast';

const meta: Meta = {
  title: 'Showcase/All Components',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' }
};
export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [openToast, setOpenToast] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    return (
      <div style={{ padding: 24, display:'grid', gap: 24, gridTemplateColumns: '1fr', maxWidth: 960, margin: '0 auto' }}>
        <section>
          <h2>Buttons</h2>
          <div style={{ display:'flex', gap: 12, flexWrap:'wrap' }}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button isLoading={loading} onClick={() => { setLoading(true); setTimeout(()=>setLoading(false), 1500); }}>Async Action</Button>
          </div>
        </section>

        <section>
          <h2>Inputs</h2>
          <div style={{ display:'grid', gap: 12 }}>
            <Input label="Email" placeholder="you@example.com" />
            <TextArea label="Message" placeholder="Say hi..." />
          </div>
        </section>

        <section>
          <h2>Overlays</h2>
          <div style={{ display:'flex', gap: 12, flexWrap:'wrap' }}>
            <Button onClick={()=>setOpenModal(true)}>Open Modal</Button>
            <Button onClick={()=>setOpenDrawer(true)}>Open Drawer</Button>
            <Button onClick={()=>{setOpenToast(true); setTimeout(()=>setOpenToast(false), 1400);}}>Show Toast</Button>
          </div>
          <Modal open={openModal} onClose={()=>setOpenModal(false)} title="Confirm">
            Content in a modal
          </Modal>
          <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} title="Menu">
            Items inside the drawer
          </Drawer>
          <Toast open={openToast}>Teste!</Toast>
        </section>
      </div>
    );
  }
};
