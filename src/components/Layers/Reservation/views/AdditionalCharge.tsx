/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Card from "@/components/Views/Card";
import CardTitle from "@/components/common/CardTitle";
import InputBox from "@/components/common/InputBox";
import { charges, updateAdditionalCharges } from "@/lib/redux/chargeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/stateHook";
import React, { useEffect } from "react";

interface AdditionalChargeProps {
  getData?: (data?: any) => void;
}

export default function AdditionalCharge({
  getData = () => {},
}: AdditionalChargeProps) {
  const dispatch = useAppDispatch();
  const [additionalCharges, setAdditionalCharges] = React.useState<any>({
    collisionDamageWaiver: 0,
    liabilityInsurance: 0,
    rentalTax: 0,
  });

  useEffect(() => {
    getData(additionalCharges);
    dispatch(updateAdditionalCharges(additionalCharges));
  }, [additionalCharges]);


  return (
    <div>
      <CardTitle text={"Additional Charge"} className="mb-4" />
      <Card>
        <form className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="w-full flex items-center gap-2">
              <InputBox
                type="checkbox"
                onChange={(checked) => {
                  setAdditionalCharges({
                    ...additionalCharges,
                    collisionDamageWaiver: checked ? 9.0 : 0,
                  });
                }}
              />
              <span>Collision Damage Waiver</span>
            </div>
            <span>$9.00</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-full flex items-center gap-2">
              <InputBox
                type="checkbox"
                onChange={(checked) =>
                  setAdditionalCharges({
                    ...additionalCharges,
                    liabilityInsurance: checked ? 15.0 : 0,
                  })
                }
              />
              <span>Liability Insurance</span>
            </div>
            <span>$15.00</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-full flex items-center gap-2">
              <InputBox
                type="checkbox"
                onChange={(checked) =>
                  setAdditionalCharges({
                    ...additionalCharges,
                    rentalTax: checked ? 11.5 : 0,
                  })
                }
              />
              <span>Rental Tax</span>
            </div>
            <span>11.5%</span>
          </div>
        </form>
      </Card>
    </div>
  );
}
