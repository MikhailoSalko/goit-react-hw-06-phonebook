import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return state;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
