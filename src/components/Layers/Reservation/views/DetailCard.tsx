/* eslint-disable react-hooks/exhaustive-deps */
import Card from "@/components/Views/Card";
import CardTitle from "@/components/common/CardTitle";
import InputBox from "@/components/common/InputBox";
import { updateUserDetail } from "@/lib/redux/chargeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/stateHook";
import { calculateDateDuration } from "@/utils/calculateDateDuration";
import React, { useEffect, useState } from "react";

export default function DetailCard() {
  const dispatch = useAppDispatch();
  const userDetail = useAppSelector((state) => state.chargeSlice.userDetail);

  const [details, setDetails] = useState<any>({
    id: "",
    pickupDate: "",
    returnDate: "",
    duration: "",
    discount: "",
    getTotalDuration: function () {
      return this.pickupDate && this.returnDate
        ? calculateDateDuration(
            new Date(this.pickupDate),
            new Date(this.returnDate)
          ).parsedDuration
        : "0 days";
    },
  });

  useEffect(() => {
    dispatch(
      updateUserDetail({
        ...userDetail,
        ...details,
      })
    );
  }, [details]);

  return (
    <div className="flex flex-col gap-4">
      <CardTitle text={"Reservation Details"} />
      <Card>
        <form className="flex flex-col gap-2">
          <InputBox
            label={"Reservation ID"}
            type="text"
            onChange={(id) => {
              setDetails({ ...details, id: id });
            }}
          />
          <InputBox
            label={"Pickup Date"}
            type="date"
            required
            onChange={(date) => setDetails({ ...details, pickupDate: date })}
          />
          <InputBox
            label={"Return Date"}
            type="date"
            required
            onChange={(date) => {
              const totalDuration = calculateDateDuration(
                new Date(details.pickupDate),
                new Date(date)
              );

              setDetails({
                ...details,
                returnDate: date,
                duration: {
                  totalDays: totalDuration.duration,
                  inWeek: totalDuration.weeks,
                  inDays: totalDuration.days,
                  inHour: totalDuration.duration * 24,
                },
              });
            }}
          />
          <div className="w-full flex items-center justify-between">
            <span>Duration</span>
            <InputBox value={details.getTotalDuration()} disabled />
          </div>
          <InputBox
            label={"Discount"}
            type="number"
            required
            onChange={(discount) => setDetails({ ...details, discount })}
            placeholder="Enter Discount"
          />
        </form>
      </Card>
    </div>
  );
}
