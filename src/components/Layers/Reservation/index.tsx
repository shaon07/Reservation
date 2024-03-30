/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import { styles } from "./styles.css";
import DetailCard from "./views/DetailCard";
import CustomerInformation from "./views/CustomerInformation";
import ChargeSummery from "./views/ChargeSummery";
import VehicleInformation from "./views/VehicleInformation";
import AdditionalCharge from "./views/AdditionalCharge";
import Header from "./views/Header";
import { useAppDispatch } from "@/lib/stateHook";
import { setCarInfo } from "@/lib/redux/chargeSlice";

interface ReservationProps {
  data?: any[];
}

export default function Reservation({ data }: ReservationProps) {
  const dispatch = useAppDispatch();
  const vehicleType = [...new Set(data?.map((item) => item.type))];
  const vehicle = [...new Set(data?.map((item) => item.model))];

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      dispatch(setCarInfo(data));
    }
  }, [data]);

  return (
    <div className={`${styles.container}`}>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto gap-4 lg:gap-6">
        <DetailCard />
        <CustomerInformation />
        <ChargeSummery />
        <VehicleInformation
          typeOptions={vehicleType}
          vehicleOptions={vehicle}
        />
        <AdditionalCharge />
      </div>
    </div>
  );
}
