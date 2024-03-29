import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const GAME_TIME_IN_SECS = 3;
const INITIAL_TIMER_TXT = new RegExp(`${GAME_TIME_IN_SECS}\.0`);

describe('Strings', () => {
  describe('"Kaboom" header', () => {
    it('renders "Kaboom" header - option 1', () => {
      render(<App />);
      expect(screen.getByText('Kaboom')).toBeInTheDocument(); // from DOM testing library
    });

    it('renders "Kaboom" header - option 2', () => {
      const { getByText } = render(<App />);
      getByText('Kaboom'); // will fail test if not found
      expect(getByText('Kaboom')).toBeInTheDocument(); // for added clarity
    });

    it('renders "Kaboom" header - option 3', () => {
      const { queryByText } = render(<App />);
      // will return null if not found (useful for testing no appearance):
      queryByText('Kaboom');
      expect(queryByText('Kaboom')).toBeInTheDocument();
    });

    it('renders "Kaboom" header - option 4', async () => {
      const { getByText, findByText } = render(<App />);

      // waiting for an element
      await waitFor(() => {
        expect(getByText('Kaboom')).toBeInTheDocument();
      });

      // a shorthand:
      await findByText('Kaboom');
    });
  });

  describe('Timer', () => {
    afterEach(() => {
      jest.useRealTimers();
    });

    it('renders initial timer value', () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId('timer-txt')).toHaveTextContent(INITIAL_TIMER_TXT);
    });

    it('Changes the timer from initial time to 0 after clicking "start" - using act()', () => {
      const { getByTestId, getByText } = render(<App />);

      act(() => {
        jest.useFakeTimers();

        const startBtn = getByText('Start');
        userEvent.click(startBtn);

        // jest.runAllTimers();
        jest.advanceTimersByTime(GAME_TIME_IN_SECS * 1000);
      });

      // expect(getByTestId('timer-txt')).toHaveTextContent('0.0') // searches for sub string
      expect(getByTestId('timer-txt')).toHaveTextContent(/0\.0/); // expect exact match
    });

    it('Changes the timer from initial time to 0 after clicking "start" 2 - async + waitFor', async () => {
      const { getByTestId, getByText } = render(<App />);

      jest.useFakeTimers();

      const startBtn = getByText('Start');
      userEvent.click(startBtn);

      await waitFor(() => {
        // the waitFor wraps the act()
        // jest.runAllTimers();
        jest.advanceTimersByTime(GAME_TIME_IN_SECS * 1000);
        expect(getByTestId('timer-txt')).toHaveTextContent(/0\.0/);
      });
    });
  });
});
