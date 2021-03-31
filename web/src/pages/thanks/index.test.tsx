import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from './index';

describe('404', () => {
  test('renders', () => {
    const { getByText } = render(<ErrorPage />);

    expect(getByText(/404/i)).toBeInTheDocument();
  });
});
