import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';

describe('Box', () => {
  it('renders a box with initial width and height', () => {
    const { getByTestId } = render(<App />);
    const box = getByTestId('box');
    expect(box).toBeInTheDocument();
    expect(box.style.width).toBe('100px');
    expect(box.style.height).toBe('100px');

    expect(box).toHaveClass('box');
    expect(box).toHaveAttribute('class', expect.stringContaining('box'));
  });

  it('places the box in initial location', () => {
    const { getByTestId } = render(<App />);
    const box = getByTestId('box');
    expect(box.style.left).toBe('200px');
    expect(box.style.top).toBe('200px');
  });

  it('moves the box right in one second after clicking "start"', async () => {
    const { getByTestId, getByText } = render(<App />);

    jest.useFakeTimers();

    const startBtn = getByText('Start');
    fireEvent.click(startBtn);

    await waitFor(() => {
      jest.advanceTimersByTime(1000);
      expect(getByTestId('box').style.left).toContain('300px');
    });
  });
});
