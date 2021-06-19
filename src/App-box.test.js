import { render } from '@testing-library/react';
import App from './App';

describe('Box', () => {
  it('renders a box with initial width and height', () => {
    const { getByTestId } = render(<App />);
    const box = getByTestId('box');
    expect(box).toBeInTheDocument();
    expect(box.style.width).toContain('150px');
    expect(box.style.height).toContain('150px');
  });

  it('places the box in the center of space', () => {
    const { getByTestId } = render(<App />);
    const box = getByTestId('box');
    expect(box.style.left).toContain('20%');
    expect(box.style.top).toContain('20%');
  });
});
