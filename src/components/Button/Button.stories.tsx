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
    size: 'md',
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

export const Sizes: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        gap: 12,
        alignItems: 'start',
        justifyContent: 'start',
      }}
    >
      <Button {...args} size="sm" label="Small" />
      <Button {...args} size="md" label="Medium" />
      <Button {...args} size="lg" label="Large" />
    </div>
  ),
};
