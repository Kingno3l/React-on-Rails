import { configureStore } from '@reduxjs/toolkit';
import randomMessageReducer from './reducer';

const store = configureStore({
  reducer: {
    randomMessage: randomMessageReducer,
  },
});

export default store;