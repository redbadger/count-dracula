import { createMemoryHistory } from 'history';
// Set TS ignore here due a known bug on TS types for @testing-library/react
// https: github.com/testing-library/react-testing-library/issues/610#issuecomment-598514192
// @ts-ignore
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
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

  test('when click an enabled submit button should go to thanks page', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    const ProviderWrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    render(
      <ProviderWrapper>
        <Router history={history}>
          <Home />
        </Router>
      </ProviderWrapper>,
    );

    const submitButton = screen.getByText('Submit');
    const checkboxes = [
      screen.getByLabelText('Are fit and healthy'),
      screen.getByLabelText(
        'Weigh between 7 stone 12 lbs and 25 stone, or 50kg and 158kg',
      ),
      screen.getByLabelText(
        'Are aged between 17 and 66 (or 70 if you have given blood before)',
      ),
    ];

    checkboxes.forEach((checkbox) => fireEvent.click(checkbox));
    fireEvent.click(submitButton);

    expect(history.push).toHaveBeenCalledWith('/thanks');
  });
});
