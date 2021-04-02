import { Provider } from 'react-redux';
// Set TS ignore here due a known bug on TS types for @testing-library/react
// https: github.com/testing-library/react-testing-library/issues/610#issuecomment-598514192
// @ts-ignore
import { render, fireEvent, screen } from '@testing-library/react';
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

  it('check a checkbox when is clicked', () => {
    const ProviderWrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    render(
      <ProviderWrapper>
        <Form />
      </ProviderWrapper>,
    );

    const firstCheckbox = screen.getByLabelText('Are fit and healthy');

    fireEvent.click(firstCheckbox);

    expect(firstCheckbox.checked).toBe(true);
  });

  it('render a disable button if all checkboxes are NOT checked', () => {
    const ProviderWrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    render(
      <ProviderWrapper>
        <Form />
      </ProviderWrapper>,
    );

    const firstCheckbox = screen.getByLabelText('Are fit and healthy');
    const submitButton = screen.getByText('Submit');

    fireEvent.click(firstCheckbox);

    expect(submitButton.disabled).toBe(true);
  });

  it('render a button if all checkboxes are checked', () => {
    const ProviderWrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    render(
      <ProviderWrapper>
        <Form />
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
    expect(submitButton.disabled).toBe(false);
  });
});
