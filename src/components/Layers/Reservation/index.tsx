import React from "react";
import { styles } from "./styles.css";
import DetailCard from "./views/DetailCard";
import CustomerInformation from "./views/CustomerInformation";
import ChargeSummery from "./views/ChargeSummery";
import VehicleInformation from "./views/VehicleInformation";
import AdditionalCharge from "./views/AdditionalCharge";
import Header from "./views/Header";

interface ReservationProps {
  data?: any[];
}

export default function Reservation({ data }: ReservationProps) {

  const vehicleType = [...new Set(data?.map((item) => item.type))];
  const vehicle = [...new Set(data?.map((item) => item.model))];

  return (
    <div className={`${styles.container}`}>
      <pre>
      {JSON.stringify(data, null, 2)}
      </pre>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto gap-4 lg:gap-6">
        <DetailCard />
        <CustomerInformation />
        <ChargeSummery />
        <VehicleInformation typeOptions={vehicleType} vehicleOptions={vehicle} />
        <AdditionalCharge />
      </div>
    </div>
  );
}
