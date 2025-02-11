import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import bagSumSlice from "./bagSumSlice";

const myntraStore = //craetes redux store 
configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bagitems: bagSlice.reducer,
    bagSummary: bagSumSlice.reducer,
  },
});
export default myntraStore;
