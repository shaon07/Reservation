import { globalStyles } from "@/globalStyles/index.css";
import Image from "next/image";
import React from "react";

export default function Invoice() {
  return (
    <div className="p-16">
      <div className="w-full grid grid-cols-2 gap-2">
        <div className="left flex flex-col gap-4">
          <div className="flex">
            <div>
              <Image
                src="/next.svg"
                alt="logo"
                width={100}
                height={100}
                className="m-12"
              />

              <div className="flex flex-col">
                <h2 className={`${globalStyles.typography.h1} uppercase`}>
                  renter info
                </h2>
                <span>John doe</span>
                <span>test@gmail.com</span>
                <span>PH:123-456-7890</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span>CH Car Park Inc</span>
                <span>123 Main Street</span>
                <span>123-456-7890</span>
              </div>

              <div className="flex flex-col">
                <span>Monday 9:00 AM - 5:00 PM</span>
                <span>Saturday 9:00 AM - 5:00 PM</span>
                <span>Sunday 9:00 AM - 5:00 PM</span>
                <span>Monday 9:00 AM - 5:00 PM</span>
                <span>Saturday 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className={`${globalStyles.typography.h1} uppercase`}>
                additional authorized driver(s)
              </h2>
            </div>

            <div>
              <h2 className={`${globalStyles.typography.h1} uppercase`}>
                Unit Details
              </h2>

              <div className="flex flex-col">
                <span>Unit: nissan altima</span>
                <span>Make & Model: nissan altima 2020</span>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <span>Bill To: John Doe</span>
              <span>Payment Type: Unpaid</span>
              <span>AUTH: $0.00</span>
            </div>

            <div className="flex flex-col mt-4">
              <span>Referral: </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                voluptas maiores mollitia animi deleniti minus ipsum amet
                tenetur maxime voluptatibus!
              </span>

              <div className="flex items-center justify-between">
                <span className="flex-1 text-center p-4">Accept</span>
                <span className="flex-1 text-center p-4">Reject</span>
              </div>
            </div>

            <div className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              velit accusamus reprehenderit similique aperiam ipsa, beatae
              voluptatum mollitia nam praesentium, facere odio cupiditate maxime
              accusantium, perspiciatis quam corporis impedit sint!
            </div>
          </div>
        </div>

        <div className="right">
          <div>
            <h2 className={`${globalStyles.typography.h1}`}>Reservation</h2>

            <h2 className={`${globalStyles.typography.h1}`}>RA #21</h2>

            <h2
              className={`${globalStyles.typography.h1} font-normal uppercase`}
            >
              Repair Order:
            </h2>
            <h2
              className={`${globalStyles.typography.h1} font-normal uppercase`}
            >
              CLAIM:
            </h2>

            <div className="flex flex-col ">
              <span>Date/Time Out: 01/01/2022 9:00 AM</span>
              <span>Date/Time In: 01/01/2022 9:00 AM</span>
            </div>

            <div className="bg-gray-300 p-4">
              <h2 className={`${globalStyles.typography.h1} uppercase`}>
                Charge Summary
              </h2>

              <table>
                <tbody>
                <tr>
                  <th></th>
                  <th>Unit</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td className="pr-4">Hourly</td>
                  <td className="pr-4">1</td>
                  <td className="pr-4">$2999</td>
                  <td className="pr-4">$2999</td>
                </tr>
                <tr>
                  <td className="pr-4">Weekly</td>
                  <td className="pr-4">1</td>
                  <td className="pr-4">$2999</td>
                  <td className="pr-4">$2999</td>
                </tr>
                <tr>
                  <td className="pr-4">Collision Summary</td>
                  <td className="pr-4">1</td>
                  <td className="pr-4">$2999</td>
                  <td className="pr-4">$2999</td>
                </tr>
                <tr>
                  <td className="pr-4">Total</td>
                  <td className="pr-4"></td>
                  <td className="pr-4"></td>
                  <td className="pr-4">$2999</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque
              ut alias dolores expedita beatae est. Nihil, animi, aliquam
              suscipit hic natus doloribus aliquid maxime molestiae numquam
              atque ut non. Quisquam commodi numquam explicabo amet ea quia!
              Dicta provident ex reprehenderit nulla quia suscipit a ea itaque
              quaerat molestiae illum maiores culpa consectetur asperiores quae,
              in optio quam cumque nemo ducimus corrupti placeat. Cumque
              praesentium deleniti blanditiis voluptate similique eaque aperiam
              voluptatem atque magni reiciendis iure ducimus ex quam ea, natus
              cum dolores nam perferendis eum. Exercitationem ad distinctio
              animi maiores inventore delectus. Veritatis, amet. Eveniet qui
              autem facilis repudiandae?
            </div>

            <div className="flex flex-col mt-4 gap-2">
              <span>Renter Signature</span>
              <span>------------------------------</span>
            </div>

            <div className="flex flex-col mt-4 gap-2">
              <span>Additional Driver 1</span>
              <span>------------------------------</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
