import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('Test main menu component render', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText('Меню')).toBeInTheDocument();
  expect(screen.getByText('О нас')).toBeInTheDocument();
  expect(screen.getByText('Контакты')).toBeInTheDocument();
  expect(screen.queryByText('Назад')).not.toBeInTheDocument();
});
