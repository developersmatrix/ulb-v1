import { configureStore } from "@reduxjs/toolkit";

import ptaxReducer from "./ptaxSlice";

export default configureStore({
  reducer: { ptax: ptaxReducer },
});
