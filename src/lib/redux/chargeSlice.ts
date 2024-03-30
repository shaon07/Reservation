import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
export interface CounterState {
  additionalCharges: {
    collisionDamageWaiver: number;
    liabilityInsurance: number;
    rentalTax: number;
  };
}

// Define the initial state using that type
const initialState: CounterState = {
  additionalCharges: {
    collisionDamageWaiver: 0,
    liabilityInsurance: 0,
    rentalTax: 0,
  },
};

export const chargeSlice = createSlice({
  name: "chargeSlice",
  initialState,
  reducers: {
    updateAdditionalCharges: (state, action) => {
      state.additionalCharges = action.payload;
    },
  },
});

export const { updateAdditionalCharges} = chargeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const charges = (state: RootState) => state.chargeSlice;

export default chargeSlice.reducer;
