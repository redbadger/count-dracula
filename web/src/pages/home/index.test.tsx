import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  xtest('renders', () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Blood donation/i)).toBeInTheDocument();
  });
});
