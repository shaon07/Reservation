import Reservation from "@/components/Views/Reservation";
import React from "react";
import { styles } from "./styles.css";

export default function HomePageContainer() {
  return (
    <div className={`${styles.container}`}>
      <Reservation />
    </div>
  );
}
