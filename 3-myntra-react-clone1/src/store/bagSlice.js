import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bagitems",
  initialState: [],
  reducers: {
    //In the case of your addToBag reducer, you're directly pushing a new item onto the state array. Since this operation modifies the state array directly, there's no need to return anything explicitly from the reducer. Redux Toolkit will handle the immutability aspect for you.

    //However, in the removeFromBag reducer, you're using the filter method, which doesn't mutate the original array but instead returns a new array with the filtered items. Therefore, you need to return this new array explicitly from the reducer.
    addToBag: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
      // yaha state modify hoga ,,jo array hai vo modify hoga return karne ki jarurat nahi hai
    },
    removeFromBag: (state, action) => {
      console.log(action.payload);
      return state.filter((item) => item.id !== action.payload);

      //yaha naya array create hoga isliye return likha hai
    },
  },
});
export default bagSlice;
export const bagSliceActions = bagSlice.actions;
