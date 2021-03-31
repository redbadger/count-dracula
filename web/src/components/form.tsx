import { Button, Checkboxes, Form } from 'nhsuk-react-components';
import { useDispatch, useSelector } from 'react-redux';
import React, { SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';

import {
  selectForm,
  setIsReadyToSubmit,
  setValues,
} from '../app/features/form/formSlice';
import { useEffect } from 'react';

const FormComponent: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { values, isReadyToSubmit } = useSelector(selectForm);

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    dispatch(setValues({ ...values, [target.value]: target.checked }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push('/thanks');
  };

  useEffect(() => {
    const areAllCheckboxesChecked = Object.values(values).every(
      (value) => value === true,
    );

    if (areAllCheckboxesChecked) {
      dispatch(setIsReadyToSubmit());
    }
  }, [dispatch, values]);

  return (
    <Form onSubmit={handleSubmit}>
      <Checkboxes onChange={handleChange}>
        <Checkboxes.Box value="healthy">Are fit and healthy</Checkboxes.Box>
        <Checkboxes.Box value="weight">
          Weigh between 7 stone 12 lbs and 25 stone, or 50kg and 158kg
        </Checkboxes.Box>
        <Checkboxes.Box value="age">
          Are aged between 17 and 66 (or 70 if you have given blood before)
        </Checkboxes.Box>
      </Checkboxes>
      <Button disabled={!isReadyToSubmit}>Submit</Button>
    </Form>
  );
};

export default FormComponent;
