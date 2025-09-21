import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { light, dark } from './tokens';

const meta: Meta = {
  title: 'Foundation/Tokens',
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

const ColorGrid = ({ colors }: { colors: Record<string,string> }) => (
  <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }}>
    {Object.entries(colors).map(([k,v]) => (
      <div key={k} style={{ border:'1px solid #e9ecef', borderRadius:10, overflow:'hidden' }}>
        <div style={{ height:56, background:v }} />
        <div style={{ padding:8, fontSize:12 }}><strong>{k}</strong><div style={{ opacity:.7 }}>{v}</div></div>
      </div>
    ))}
  </div>
);

export const Tokens: Story = {
  render: () => (
    <div style={{ display:'grid', gap: 24 }}>
      <section>
        <h3>Light Colors</h3>
        <ColorGrid colors={light.colors} />
      </section>
      <section>
        <h3>Dark Colors</h3>
        <ColorGrid colors={dark.colors} />
      </section>
      <section>
        <h3>Radii</h3>
        <pre>{JSON.stringify(light.radii, null, 2)}</pre>
      </section>
      <section>
        <h3>Spacing</h3>
        <pre>{JSON.stringify(light.spacing, null, 2)}</pre>
      </section>
    </div>
  )
};
