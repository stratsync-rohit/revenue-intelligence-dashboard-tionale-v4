import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDivision: null,
};

const divisionSlice = createSlice({
  name: 'division',
  initialState,
  reducers: {
    setSelectedDivision(state, action) {
      state.selectedDivision = action.payload;
    },
  },
});

export const { setSelectedDivision } = divisionSlice.actions;
export default divisionSlice.reducer;
