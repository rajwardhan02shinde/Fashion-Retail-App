import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      console.log(action);
      console.log(action.payload);
      return action.payload;
    }
  },
});
export default itemsSlice;
export const itemsSliceActions = itemsSlice.actions;
