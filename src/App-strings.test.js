import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('"Kaboom" header', () => {
  it('renders "Kaboom" header - option 1', () => {
    render(<App />);
    expect(screen.getByText('Kaboom')).toBeInTheDocument();
  });

  it('renders "Kaboom" header - option 2', () => {
    const { getByText } = render(<App />);
    expect(getByText('Kaboom')); // will fail test if not found
    expect(getByText('Kaboom')).toBeInTheDocument(); // for added clarity
  });

  it('renders "Kaboom" header - option 3', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('Kaboom')); // will return null if not found
    expect(queryByText('Kaboom')).toBeInTheDocument();
  });

  it('renders "Kaboom" header - option 4', async () => {
    const { findByText } = render(<App />);
    await expect(findByText('Kaboom'));
    // expect(element).toBeInTheDocument(); // will not work
  });

  it('renders "Kaboom" header - option 5', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => {
      expect(getByText('Kaboom')).toBeInTheDocument();
    });
  });
});
