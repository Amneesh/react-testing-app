import React from 'react';
import { render, screen } from '@testing-library/react';
import GreetingComp from './components/GreetingComp'; // Adjust the path based on your file structure

test('renders the Greeting component', () => {
  // Render the Greeting component
  render(<GreetingComp />);

  // Assert that the greeting message is displayed
  const greetingMessage = screen.getByText(/Hello, Amneesh!/i);
  expect(greetingMessage).toBeInTheDocument();
});
