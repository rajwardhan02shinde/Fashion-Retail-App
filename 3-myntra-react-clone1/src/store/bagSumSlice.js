import { createSlice } from "@reduxjs/toolkit";

const bagSumSlice = createSlice({
  name: "bagSummary",
  initialState: {
    totalMRP: 0,
    discountOnMRP: 0,
    convenienceFee: 99,
    totalAmount: 0,
    finalPayment: 0,
  },

  reducers: {
    addTotalMRP: (state, action) => {
      console.log(action.payload);
      state.totalMRP += action.payload;
    },
    discountOnMRP: (state, action) => {
      console.log(action.payload);
      state.discountOnMRP +=
        action.payload.originalPrice - action.payload.currentPrice;
    },
    totalAmount: (state, action) => {
      state.totalAmount += action.payload;
    },
    finalPayment: (state, action) => {
      state.finalPayment = state.totalAmount + state.convenienceFee;
    },
    removeFromMRP: (state, action) => {
      state.totalMRP -= action.payload;
    },
    removeDiscountOnMRP: (state, action) => {
      state.discountOnMRP -=
        action.payload.originalPrice - action.payload.currentPrice;
    },
    removeTotalAmount: (state, action) => {
      state.totalAmount -= action.payload;
    },
    removeFinalPayment: (state, action) => {
      state.finalPayment = state.totalAmount + state.convenienceFee;
    },
  },
});
export default bagSumSlice;
export const bagSumActions = bagSumSlice.actions;
