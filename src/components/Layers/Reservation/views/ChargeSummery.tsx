import CardTitle from "@/components/common/CardTitle";
import { useAppSelector } from "@/lib/stateHook";
import { calculatePercentage } from "@/utils/calculatePercentage";
import React from "react";

export default function ChargeSummery() {
  const fullInfo = useAppSelector((state) => state.chargeSlice);

  const carDetail = fullInfo.carInfo.find(
    (item: any) =>
      item.type === fullInfo.vehicleType && item.model === fullInfo.vehicle
  );

  const totalDailyRate =
    (carDetail?.rates?.daily || 0) * fullInfo?.userDetail?.duration?.inDays ||
    0;

  const totalHourlyRate = (carDetail?.rates?.hourly || 0) * fullInfo?.userDetail?.duration?.inHour || 0;

  const totalWeeklyRate =
    (carDetail?.rates?.weekly || 0) * fullInfo?.userDetail?.duration?.inWeek ||
    0;

  const waiver = fullInfo?.additionalCharges?.collisionDamageWaiver;
  const insurance = fullInfo?.additionalCharges?.liabilityInsurance;
  const tax = fullInfo?.additionalCharges?.rentalTax || 0;

  const total =
    totalDailyRate +
      totalWeeklyRate +
      waiver +
      insurance -
      fullInfo.userDetail.discount || 0;


  return (
    <div>
      <CardTitle text={"Charge Summery"} className="mb-4" />
      <div className="bg-[#DFDFFF] border border-[#5D5CFF] rounded-md relative overflow-x-auto">
        <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400">
            <tr className="border-[#5D5CFF] border-b-2">
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Charges
              </th>
              <th scope="col" className="px-6 py-3">
                Unit
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                Rate
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" dark:bg-gray-800">
              <th
                scope="row"
                className="p-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hourly
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">${carDetail?.rates?.hourly || 0}</td>
              <td className="px-6 py-4">${totalHourlyRate}</td>
            </tr>

            <tr className=" dark:bg-gray-800">
              <th
                scope="row"
                className="p-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Daily
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">${carDetail?.rates?.daily || 0}</td>
              <td className="px-6 py-4">${totalDailyRate}</td>
            </tr>

            <tr className=" dark:bg-gray-800">
              <th
                scope="row"
                className="p-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Weekly
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">${carDetail?.rates?.weekly || 0}</td>
              <td className="px-6 py-4">${totalWeeklyRate}</td>
            </tr>

            {!!fullInfo?.additionalCharges?.collisionDamageWaiver && (
              <tr className=" dark:bg-gray-800">
                <th
                  scope="row"
                  className="p-4 font-medium text-sm text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Collision Damage Waiver
                </th>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">${waiver || 0}</td>
                <td className="px-6 py-4">${waiver || 0}</td>
              </tr>
            )}

            {!!fullInfo?.additionalCharges?.liabilityInsurance && (
              <tr className=" dark:bg-gray-800">
                <th
                  scope="row"
                  className="p-4 font-medium text-sm text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Liability Insurance
                </th>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">${insurance}</td>
                <td className="px-6 py-4">${insurance}</td>
              </tr>
            )}

            {!!fullInfo?.additionalCharges?.rentalTax && (
              <tr className=" dark:bg-gray-800">
                <th
                  scope="row"
                  className="p-4 font-medium text-sm text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Rental Tax
                </th>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">{tax}%</td>
                <td className="px-6 py-4">{tax}%</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">
                ${tax ? calculatePercentage(total, tax) : total}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
