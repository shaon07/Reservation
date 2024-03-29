import Card from "@/components/Views/Card";
import CardTitle from "@/components/common/CardTitle";
import InputBox from "@/components/common/InputBox";
import React from "react";

export default function DetailCard() {
  return (
    <div className="flex flex-col gap-4">
      <CardTitle text={"Reservation Details"} />
      <Card>
        <form className="flex flex-col gap-2">
          <InputBox label={"Reservation ID"} type="text" />
          <InputBox label={"Pickup Date"} type="date" required />
          <InputBox label={"Return Date"} type="date" required />
          <div className="w-full flex items-center justify-between">
            <span>Duration</span>
            <InputBox  />
          </div>
          <InputBox
            label={"Discount"}
            type="number"
            required
            placeholder="Enter Discount"
          />
        </form>
      </Card>
    </div>
  );
}
