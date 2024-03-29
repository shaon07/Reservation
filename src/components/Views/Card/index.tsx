import InputBox from "@/components/common/InputBox";
import React, { CSSProperties } from "react";

interface Card {
    className?: string;
    style?: CSSProperties;
    children: React.ReactNode;
}

export default function Card({
    className="",
    style,
    children,
}: Card) {
  return (
    <div className={`border border-[#DFDFFF] p-4 rounded-md ${className} ${style}`}>
      {children}
    </div>
  );
}
