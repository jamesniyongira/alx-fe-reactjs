import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Toggle')); // Simulate toggle click
  expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Delete')); // Simulate delete click
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
