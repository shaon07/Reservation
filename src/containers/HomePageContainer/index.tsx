import Reservation from "@/components/Layers/Reservation";
import React from "react";
import { styles } from "./styles.css";

export default function HomePageContainer() {
  return (
    <div className={`${styles.container}`}>
      <Reservation />
    </div>
  );
}
