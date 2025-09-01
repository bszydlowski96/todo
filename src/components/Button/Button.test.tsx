import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('renders all variants', () => {
    render(<Button label="Primary" variant="primary" />);
    render(<Button label="Secondary" variant="secondary" />);
    render(<Button label="Danger" variant="danger" />);

    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
    expect(screen.getByText('Danger')).toBeInTheDocument();
  });

  it('renders all sizes', () => {
    render(<Button label="Small" size="sm" />);
    render(<Button label="Medium" size="md" />);
    render(<Button label="Large" size="lg" />);

    expect(screen.getByText('Small')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('shows focus when tabbed', async () => {
    const user = userEvent.setup();
    render(<Button label="Focusable" />);
    const btn = screen.getByRole('button', { name: /Focusable/i });

    await user.tab();
    expect(btn).toHaveFocus();
  });

  it('does not trigger onClick when disabled', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button label="Disabled" disabled onClick={onClick} />);
    const btn = screen.getByRole('button', { name: /Disabled/i });

    await user.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });
});
