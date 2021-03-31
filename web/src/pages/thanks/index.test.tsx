import React from 'react';
import { render } from '@testing-library/react';
import Thanks from './index';

describe('Thanks page', () => {
  test('renders', () => {
    const { getByText } = render(<Thanks />);
    expect(getByText(/Thanks/i)).toBeInTheDocument();
  });
});
