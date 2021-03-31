import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';

import Home from './index';

import { store } from '../../app/store';

describe('Home', () => {
  test('renders', () => {
    const ProviderWrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { getByText } = render(
      <ProviderWrapper>
        <Home />
      </ProviderWrapper>,
    );

    expect(getByText(/Blood donation/i)).toBeInTheDocument();
  });
});
