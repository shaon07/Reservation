import React from "react";
import { styles } from "./styles.css";
import { globalStyles } from "@/globalStyles/index.css";
import DetailCard from "./views/DetailCard";
import CustomerInformation from "./views/CustomerInformation";
import ChargeSummery from "./views/ChargeSummery";

export default function Reservation() {
  return (
    <div className={`${styles.container}`}>
      <div className="w-full flex items-center justify-between">
        <h1 className={`${globalStyles.typography.h1}`}>Reservation</h1>
        <button className={`${globalStyles.button.primary}`}>Print/Download</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto gap-4 lg:gap-6">
        <DetailCard />
        <CustomerInformation />
        <ChargeSummery />
        <DetailCard />
        <DetailCard />
      </div>
    </div>
  );
}
