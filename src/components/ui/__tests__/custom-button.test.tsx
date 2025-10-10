import { render, screen } from '@testing-library/react';
import { Button } from '../custom-button';

describe('Custom Button', () => {
  it('renders with default text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
});
