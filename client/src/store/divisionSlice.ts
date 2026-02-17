import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  selectedDivision: null,
  selectedItems: [],
};


const divisionSlice = createSlice({
  name: 'division',
  initialState,
  reducers: {
    setSelectedDivision(state, action) {
      state.selectedDivision = action.payload;
    },
    setSelectedItems(state, action) {
      state.selectedItems = action.payload;
    },
    addSelectedItem(state, action) {
      if (!state.selectedItems.includes(action.payload)) {
        state.selectedItems.push(action.payload);
      }
    },
    removeSelectedItem(state, action) {
      state.selectedItems = state.selectedItems.filter(item => item !== action.payload);
    },
    clearSelectedItems(state) {
      state.selectedItems = [];
    },
  },
});

export const { setSelectedDivision, setSelectedItems, addSelectedItem, removeSelectedItem, clearSelectedItems } = divisionSlice.actions;
export default divisionSlice.reducer;
