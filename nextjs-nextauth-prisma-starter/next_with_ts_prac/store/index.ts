import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';
import getConfig from 'next/config';

axios.defaults.baseURL = getConfig().publicRuntimeConfig.apiServerUrl;

const memoSlice = createSlice({
  name: 'memo',
  initialState: { memoList: [] },
  reducers: {
    memoList(state, action) {
      state.memoList = action.payload;
    },
  },
});

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    memo: memoSlice.reducer,
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: { memo: memoSlice.reducer },
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export const memoActions = memoSlice.actions;
