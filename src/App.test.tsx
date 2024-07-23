//import React from 'react';
//import * as React from 'react';

import { render } from '@testing-library/react';
import App from './App';

import '@testing-library/jest-dom'

test('renders Hello world text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Hello world/i);
  expect(textElement).toBeInTheDocument();
});