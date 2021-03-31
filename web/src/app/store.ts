import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import formReducer from './features/form/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
