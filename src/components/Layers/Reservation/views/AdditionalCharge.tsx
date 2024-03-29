import Card from "@/components/Views/Card";
import CardTitle from "@/components/common/CardTitle";
import InputBox from "@/components/common/InputBox";
import React from "react";

export default function AdditionalCharge() {
  return (
    <div>
      <CardTitle text={"Additional Charge"} className="mb-4" />
      <Card>
        <form className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="w-full flex items-center gap-2">
              <InputBox type="checkbox" />
              <span>Collision Damage Waiver</span>
            </div>
            <span>$99.99</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-full flex items-center gap-2">
              <InputBox type="checkbox" />
              <span>Liability Insurance</span>
            </div>
            <span>$99.99</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-full flex items-center gap-2">
              <InputBox type="checkbox" />
              <span>Rental Tax</span>
            </div>
            <span>$99.99</span>
          </div>
        </form>
      </Card>
    </div>
  );
}
