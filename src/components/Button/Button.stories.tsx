// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    label: { control: 'text' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
    },
    size: { control: { type: 'radio' }, options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    label: 'Click me',
    variant: 'primary',
    size: 'lg',
    disabled: false,
    type: 'button',
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Danger: Story = { args: { variant: 'danger' } };
export const Disabled: Story = { args: { disabled: true } };
