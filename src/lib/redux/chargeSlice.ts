import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
export interface CounterState {
  additionalCharges: {
    collisionDamageWaiver: number;
    liabilityInsurance: number;
    rentalTax: number;
  };
  vehicleType: string;
  vehicle: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  additionalCharges: {
    collisionDamageWaiver: 0,
    liabilityInsurance: 0,
    rentalTax: 0,
  },
  vehicleType: "",
  vehicle: "",
};

export const chargeSlice = createSlice({
  name: "chargeSlice",
  initialState,
  reducers: {
    updateAdditionalCharges: (state, action) => {
      state.additionalCharges = action.payload;
    },
    updateVehicleType: (state, action: PayloadAction<string>) => {
      state.vehicleType = action.payload;
    },
    updateVehicle: (state, action: PayloadAction<string>) => {
      state.vehicle = action.payload;
    }
  },
});

export const { updateAdditionalCharges, updateVehicleType, updateVehicle} = chargeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const charges = (state: RootState) => state.chargeSlice;

export default chargeSlice.reducer;
