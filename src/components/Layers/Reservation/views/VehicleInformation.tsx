import Card from "@/components/Views/Card";
import CardTitle from "@/components/common/CardTitle";
import SelectBox from "@/components/common/SelectBox";
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
    }
]

interface VehicleInformationProps {
  typeOptions?: any[];
  vehicleOptions?: any[];
}

export default function VehicleInformation({typeOptions, vehicleOptions}:VehicleInformationProps) {

  const vehicleTypeOptions = typeOptions?.map((item) => {
    return {
      label: item,
      value: item
    }
  });

  const vehicleOptionsMapped = vehicleOptions?.map((item) => {
    return {
      label: item,
      value: item
    }
  })

  return (
    <div>
      <CardTitle text={"Vehicle Information"} className="mb-4" />
      <Card>
        <form className="max-w-sm mx-auto">
          <SelectBox label={"Vehicle Type"} options={vehicleTypeOptions || countryOptions} required />
          <SelectBox label={"Vehicle"} options={vehicleOptionsMapped || countryOptions} required />
        </form>
      </Card>
    </div>
  );
}
