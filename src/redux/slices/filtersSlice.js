import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: {
    name: 'Популярности',
    sortProperty: 'rating'
  }
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSortType(state, action) {
      state.sortType = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType } = filtersSlice.actions;

export default filtersSlice.reducer;
