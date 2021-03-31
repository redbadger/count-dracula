import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';

import { store } from '../../app/store';
import Home from './index';

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
