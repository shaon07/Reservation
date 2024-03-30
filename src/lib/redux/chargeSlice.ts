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
  userDetail: {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    id: string;
    pickupDate: string;
    returnDate: string;
    duration: any;
    discount: number;
  };
  carInfo?: any;
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
  userDetail: {
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
    id: "",
    pickupDate: "",
    returnDate: "",
    duration: {},
    discount: 0,
  },
  carInfo: [],
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
    },
    updateUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    setCarInfo: (state, action) => {
      state.carInfo = action.payload;
    },
  },
});

export const {
  updateAdditionalCharges,
  updateVehicleType,
  updateVehicle,
  updateUserDetail,
  setCarInfo,
} = chargeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const charges = (state: RootState) => state.chargeSlice;

export default chargeSlice.reducer;
