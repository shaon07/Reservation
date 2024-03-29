import React from "react";
import { styles } from "./styles.css";
import { globalStyles } from "@/globalStyles/index.css";

export default function Reservation() {
  return (
    <div className={`${styles.container}`}>
      <div className="w-full flex items-center justify-between">
        <h1 className={`${globalStyles.typography.h1}`}>Reservation</h1>
        <button className={`${globalStyles.button.primary}`}>Print/Download</button>
      </div>
    </div>
  );
}
