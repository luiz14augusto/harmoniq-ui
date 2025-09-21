import { Button } from './Button';
const meta = {
    title: 'Inputs/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'radio', options: ['primary', 'secondary', 'danger', 'ghost'] },
        disabled: { control: 'boolean' },
        children: { control: 'text' }
    },
    args: { variant: 'primary', disabled: false, children: 'Click me' },
};
export default meta;
export const Playground = { args: {} };
export const Loading = { args: { isLoading: true, children: 'Save' } };
