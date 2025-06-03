import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AfricanMap from './AfricanMap';

test('displays Burkina Faso info when its region is clicked', async () => {
  const { container } = render(<AfricanMap />);
  const path = container.querySelector('#bf');
  expect(path).toBeInTheDocument();
  await userEvent.click(path);
  expect(screen.getByText(/Burkina Faso/i)).toBeInTheDocument();
  expect(screen.getByText(/Ouagadougou/i)).toBeInTheDocument();
  expect(screen.getByText(/West African CFA franc/i)).toBeInTheDocument();
  expect(screen.getByText('🇧🇫')).toBeInTheDocument();
});
