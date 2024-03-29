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

export default function VehicleInformation() {
  return (
    <div>
      <CardTitle text={"Vehicle Information"} className="mb-4" />
      <Card>
        <form className="max-w-sm mx-auto">
          <SelectBox label={"Vehicle Type"} options={countryOptions} required />
          <SelectBox label={"Vehicle"} options={countryOptions} required />
        </form>
      </Card>
    </div>
  );
}
