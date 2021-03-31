import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';

import { store } from '../../app/store';
import Form from './index';

describe('Form', () => {
  test('renders', () => {
    const ProviderWrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { getByText } = render(
      <ProviderWrapper>
        <Form />
      </ProviderWrapper>,
    );

    expect(getByText(/healthy/i)).toBeInTheDocument();
  });
});
