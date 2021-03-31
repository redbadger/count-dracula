import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  it('should render', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Crown/i)).toBeInTheDocument();
  });
});
