import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a greeting', () => {
  render(<App />);
  const user = screen.getByText(/hello/gi);
  expect(user).toBeInTheDocument();
});
