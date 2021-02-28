import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('the navbar has a "Home" link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const HomeLink = screen.getByText(/^Home$/);
  expect(HomeLink).toBeInTheDocument();
});

test('the navbar has a "List View" link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const Link = screen.getByText(/^List View$/);
  screen.queryByTestId;
  expect(Link).toBeInTheDocument();
});
