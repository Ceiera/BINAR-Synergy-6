import { createSlice } from '@reduxjs/toolkit';

interface tokenInitialState {
  token: string;
}

const initialState: tokenInitialState = {
  token: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = '';
    },
  },
});
export const selectToken = (state: tokenInitialState): string => state.token;
export const { saveToken, deleteToken } = tokenSlice.actions;
export default tokenSlice.reducer;