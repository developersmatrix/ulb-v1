import { createSlice } from "@reduxjs/toolkit";

export const ptaxSlice = createSlice({
  name: "propertytax",
  initialState: {
    dataFetched: false,
    ptaxData: {},
  },
  reducers: {
    addPtax: (state, action) => {
      state.dataFetched = true;
      state.ptaxData = action.payload;
    },
    resetPtax: (state) => {
      state.dataFetched = false;
      state.ptaxData = {};
    },
  },
});

export const { addPtax, resetPtax } = ptaxSlice.actions;

export default ptaxSlice.reducer;
