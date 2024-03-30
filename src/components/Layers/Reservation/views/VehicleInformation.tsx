"use client";

import Card from "@/components/Views/Card";
import CardTitle from "@/components/common/CardTitle";
import SelectBox from "@/components/common/SelectBox";
import { updateVehicle, updateVehicleType } from "@/lib/redux/chargeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/stateHook";
import React from "react";

const countryOptions = [
  {
    label: "United States",
    value: "US",
  },
  {
    label: "India",
    value: "IN",
  },
  {
    label: "United Kingdom",
    value: "UK",
  },
];

interface VehicleInformationProps {
  typeOptions?: any[];
  vehicleOptions?: any[];
}

export default function VehicleInformation({
  typeOptions,
  vehicleOptions,
}: VehicleInformationProps) {
  const dispatch = useAppDispatch();

  const vehicleTypeOptions = typeOptions?.map((item) => {
    return {
      label: item,
      value: item,
    };
  });

  const vehicleOptionsMapped = vehicleOptions?.map((item) => {
    return {
      label: item,
      value: item,
    };
  });

  return (
    <div>
      <CardTitle text={"Vehicle Information"} className="mb-4" />
      <Card>
        <form className="max-w-sm mx-auto">
          <SelectBox
            label={"Vehicle Type"}
            onChange={(data) => {
              dispatch(updateVehicleType(data));
            }}
            options={vehicleTypeOptions || countryOptions}
            required
          />
          <SelectBox
            label={"Vehicle"}
            onChange={(data) => {
              dispatch(updateVehicle(data));
            }}
            options={vehicleOptionsMapped || countryOptions}
            required
          />
        </form>
      </Card>
    </div>
  );
}
