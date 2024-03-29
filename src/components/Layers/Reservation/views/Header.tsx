"use client";

import React from "react";
import Invoice from "../../Invoice";
import { globalStyles } from "@/globalStyles/index.css";
import { htmlToPdfDownloader } from "@/utils/htmlToPdfDownloader";

export default function Header() {
  const handleDownloadPDF = () => {
    htmlToPdfDownloader("pdf-content")
  };

  return (
    <>
      <div className="w-full flex items-center justify-between mb-4">
        <h1 className={`${globalStyles.typography.h1}`}>Reservation</h1>
        <button onClick={handleDownloadPDF} className={`${globalStyles.button.primary}`}>
          Print/Download
        </button>
      </div>

      <div 
      id="pdf-content" 
      className="fixed z-[-99999]"
      >
        <Invoice />
      </div>
    </>
  );
}
