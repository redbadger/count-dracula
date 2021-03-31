import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface FormState {
  values: {
    healthy: boolean;
    weight: boolean;
    age: boolean;
  };
  isReadyToSubmit: boolean;
  hasError: boolean;
}

const initialState: FormState = {
  values: {
    healthy: false,
    weight: false,
    age: false,
  },
  isReadyToSubmit: false,
  hasError: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<FormState['values']>) => {
      state.values = { ...action.payload };
    },
    setIsReadyToSubmit: (state) => {
      state.isReadyToSubmit = true;
    },
    setHasError: (state) => {
      state.hasError = true;
    },
  },
});

export const { setValues, setIsReadyToSubmit } = formSlice.actions;

export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;
