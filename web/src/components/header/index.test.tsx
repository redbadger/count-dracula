import { Provider } from 'react-redux';
// @ts-ignore
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { store } from '../../app/store';
import Header from './index';

describe('Header', () => {
  test('renders', async () => {
    const ProviderWrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    render(
      <ProviderWrapper>
        <Header />
      </ProviderWrapper>,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
