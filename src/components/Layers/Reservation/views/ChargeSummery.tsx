import CardTitle from "@/components/common/CardTitle";
import React from "react";

export default function ChargeSummery() {
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
                Daily
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
            </tr>

            <tr className=" dark:bg-gray-800">
              <th
                scope="row"
                className="p-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Weekly
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
            </tr>

            <tr className=" dark:bg-gray-800">
              <th
                scope="row"
                className="p-4 font-medium text-sm text-gray-900 whitespace-nowrap dark:text-white"
              >
                Collision Damage Waiver
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">$21,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
