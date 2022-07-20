import { createSlice } from "@reduxjs/toolkit";

export const ptaxSlice = createSlice({
  name: "propertytax",
  initialState: {
    dataFetched: false,
    gdIsEmpty: true,
    mcIsEmpty: true,
    ptaxData: {
      _id: "",
      userId: "",
      collectionType: "",
      startYear: 0,
      endYear: 0,
      openingBalance: 0,
      currentYearDemand: 0,
      commercial: 0,
      residential: 0,
      vacant: 0,
      monthlyCollection: [
        {
          CYD: 0,
          OBC: 0,
          month: 0,
          year: 0,
          _id: "",
        },
      ],
    },
  },
  reducers: {
    addPtax: (state, action) => {
      state.dataFetched = true;
      state.ptaxData = action.payload;
    },
    updatePtax: (state, action) => {
      state.ptaxData = action.payload;
    },
    resetPtax: (state) => {
      state.dataFetched = false;
      state.ptaxData = {};
    },
  },
});

export const { addPtax, updatePtax, resetPtax } = ptaxSlice.actions;

export default ptaxSlice.reducer;
