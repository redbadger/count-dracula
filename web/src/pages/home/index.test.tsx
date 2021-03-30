import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  test('renders', () => {
    const { getByText } = render(<Home />);

    expect(getByText(/We're here for you/i)).toBeInTheDocument();
  });
});
