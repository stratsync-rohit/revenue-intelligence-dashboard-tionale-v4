import { configureStore } from '@reduxjs/toolkit';
import divisionReducer from './divisionSlice';

const store = configureStore({
  reducer: {
    division: divisionReducer,
  },
});

export default store;
