import { createSlice } from "@reduxjs/toolkit";

export const ptaxSlice = createSlice({
  name: "propertytax",
  initialState: [
    {
      id: 1,
      userId: 0,
      ptax: "21.25",
      startYear: 2022,
      endYear: 2023,
    },
  ],
  reducers: {
    addPtax: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPtax } = ptaxSlice.actions;

export default ptaxSlice.reducer;
