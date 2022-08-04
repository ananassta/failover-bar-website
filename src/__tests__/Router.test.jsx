import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { Router } from '../Router';

describe('Test app router', () => {
  beforeEach(() => {
    render(<Router />);
  });

  test('Test moving from main menu to beer menu and backward', async () => {
    await userEvent.click(screen.getByText('Меню'));
    await userEvent.click(screen.getByText('Назад'));
    expect(screen.getByText('Меню')).toBeInTheDocument();
  });

  test('Test moving from main menu to beer menu', async () => {
    await userEvent.click(screen.getByText('Меню'));
    expect(screen.getByText('IPA')).toBeInTheDocument();
    expect(screen.getByText('Лагер')).toBeInTheDocument();
    expect(screen.getByText('Стаут')).toBeInTheDocument();
    expect(screen.getByText('Эль')).toBeInTheDocument();
    expect(screen.getByText('Назад')).toBeInTheDocument();
  });

  test('Test moving to IPA category list', async () => {
    await userEvent.click(screen.getByText('IPA'));
    expect(screen.queryAllByText(/[\w]* beer/i).length).toBe(2);
  });

  test('Test moving from category list to categories', async () => {
    await userEvent.click(screen.getByText('IPA'));
    expect(screen.getByText('Лагер')).toBeInTheDocument();
  });

  test('Test moving to beer details', async () => {
    await userEvent.click(screen.getByText('IPA'));
    await userEvent.click(screen.getAllByText(/[\w]* beer/i)[0]);
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Manufacturer')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText(/[\w]* beer/i)).toBeInTheDocument();
  });

  test('Test moving back from beer details', async () => {
    await userEvent.click(screen.getByText('Назад'));
    expect(screen.getByText('IPA')).toBeInTheDocument();
    expect(screen.queryAllByText(/[\w]* beer/i).length).toBeTruthy();
  });
});
