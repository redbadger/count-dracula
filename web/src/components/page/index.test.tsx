import { Provider } from 'react-redux';
// @ts-ignore
import { render, screen } from '@testing-library/react';
import React from 'react';

import { store } from '../../app/store';
import Page from './index';

describe('Page component', () => {
  test('renders', async () => {
    const ProviderWrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    render(
      <ProviderWrapper>
        <Page />
      </ProviderWrapper>,
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
