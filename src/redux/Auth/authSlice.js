import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registrationThunk,
} from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  online: false,
  loading: false,
};
const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: {
    [registrationThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [registrationThunk.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.online = true;
    },
    [registrationThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      // state.loading = false;
    },
    [loginThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.online = true;
      state.loading = false;
      state.error = null;
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      // state.loading = false;
    },
    [logoutThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [logoutThunk.fulfilled]: (state, { payload }) => {
      state.user = '';
      state.token = '';
      state.online = false;
      state.loading = false;
      state.error = null;
    },
    [logoutThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [refreshThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },

    [refreshThunk.fulfilled]: (state, { payload }) => {
      state.online = true;
      state.loading = false;
      state.user = payload;
    },
    [refreshThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { clearError } = authSlice.actions;
