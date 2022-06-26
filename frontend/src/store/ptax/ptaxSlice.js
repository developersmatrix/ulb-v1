import { createSlice } from "@reduxjs/toolkit";

export const ptaxSlice = createSlice({
  name: "propertytax",
  initialState: [{}],
  reducers: {
    addPtax: (state, action) => {
      state.pop();
      state.push(action.payload);
    },
  },
});

export const { addPtax } = ptaxSlice.actions;

export default ptaxSlice.reducer;
