import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { agenda, agendaSubtitle, agendaTitle } from './data/Agenda';
import { slides } from './components/Slides';

test('renders the main title from agendaTitle', () => {
  render(<App />);
  expect(screen.getByText(agendaTitle)).toBeInTheDocument();
});

test('renders the subtitle from agendaSubtitle', () => {
  render(<App />);
  expect(screen.getByText(agendaSubtitle)).toBeInTheDocument();
});

test('renders the Git logo image', () => {
  render(<App />);
  const img = screen.getByAltText(/git logo/i);
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', expect.stringContaining('git-original.svg'));
});

test('renders AgendaList component', () => {
  render(<App />);
  agenda.forEach(item => {
    expect(screen.getByText(item.section)).toBeInTheDocument();
  });
});

test('renders Authorship component', () => {
  render(<App />);
  // Assuming Authorship renders a text like "By" or an author name
  // Replace 'By' with a unique text from Authorship if needed
  expect(screen.getByText(/by/i)).toBeInTheDocument();
});

test('renders all slides', () => {
  render(<App />);
  slides.forEach(slideFn => {
    const slideElement = slideFn();
    expect(React.isValidElement(slideElement)).toBe(true);
  });
});