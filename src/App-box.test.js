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

  it('places the box in initial location', () => {
    const { getByTestId } = render(<App />);
    const box = getByTestId('box');
    expect(box.style.left).toContain('50%');
    expect(box.style.top).toContain('50%');
  });

  // it('moves the box from initial location to right edge after clicking "start"', async () => {
  //   const { getByTestId, getByText } = render(<App />);
  //   const box = getByTestId('box');
  //   expect(box.style.left).toContain('50%');
  //   expect(box.style.top).toContain('50%');
  //
  //   const startBtn = getByText('Start');
  //   fireEvent.click(startBtn);
  //
  //   await waitFor(() =>
  //     expect(getByTestId('box').style.right).toContain('100%')
  //   );
  // });
});
