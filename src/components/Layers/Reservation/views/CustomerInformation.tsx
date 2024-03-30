/* eslint-disable react-hooks/exhaustive-deps */
import Card from "@/components/Views/Card";
import CardTitle from "@/components/common/CardTitle";
import InputBox from "@/components/common/InputBox";
import { updateUserDetail } from "@/lib/redux/chargeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/stateHook";
import React, { useEffect, useState } from "react";

export default function CustomerInformation() {
  const dispatch = useAppDispatch();
  const userDetail = useAppSelector((state) => state.chargeSlice.userDetail);

  const [details, setDetails] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
      <CardTitle text={"Customer Information"} />
      <Card>
        <form className="flex flex-col gap-2">
          <InputBox
            label={"First Name"}
            type="text"
            required
            onChange={(data) => setDetails({ ...details, firstName: data })}
          />
          <InputBox
            label={"Last Name"}
            type="text"
            required
            onChange={(data) => setDetails({ ...details, lastName: data })}
          />
          <InputBox
            label={"Email"}
            type="text"
            required
            onChange={(data) => setDetails({ ...details, email: data })}
          />
          <InputBox
            label={"Phone"}
            type="number"
            required
            onChange={(data) => setDetails({ ...details, phone: data })}
          />
        </form>
      </Card>
    </div>
  );
}
