import Reservation from "@/components/Layers/Reservation";
import React from "react";
import { styles } from "./styles.css";
import { getCarDetail } from "@/services/api/carDetailApi";



export default async function HomePageContainer() {

  const data = await getCarDetail();
  return (
    <div className={`${styles.container}`}>
      <Reservation data={data} />
    </div>
  );
}
