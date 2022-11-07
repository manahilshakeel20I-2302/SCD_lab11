import { render, screen } from '@testing-library/react';
import App from './App';

test('Lab task 1', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
});

test('Lab task 2', () => {
  render(<App />);
  const text = screen.getByTestId("comp");
  expect(text).toHaveTextContent("Hello world");
});

test('Lab task 3: Test case passes', () => {
  render(<App />);
  const ListItem = screen.getByTestId("comp");
  expect(ListItem).toHaveTextContent("Plum");
});

test('Lab task 3: Test case fails', () => {
  render(<App />);
  const ListItem = screen.getByTestId("comp");
  expect(ListItem).toHaveTextContent("BlueBerry");
});