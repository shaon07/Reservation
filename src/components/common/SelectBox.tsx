"use client";

import React, { CSSProperties, useState } from "react";

interface options {
  label: string;
  value: string;
}

interface SelectBox {
  id?: string;
  className?: string;
  options: options[];
  style?: CSSProperties;
  label?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (data?: any) => void;
  onFocus?: (data?: any) => void;
  onBlur?: (data?: any) => void;
}

export default function SelectBox({
  id = "",
  className = "",
  style = {},
  options = [],
  label = "",
  name = "",
  disabled = false,
  required = false,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}: SelectBox) {
  const [inputValue, setInputValue] = useState<any>("");

  return (
    <div className="mb-2 flex-flex-col gap-2">
      {label && (
        <label className=" mb-2 text-sm font-light text-gray-900 dark:text-white">
          {label}{" "}
          {required && (
            <span className=" mb-2 text-sm font-light text-red-500">
              {" "}
              *{" "}
            </span>
          )}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={inputValue}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.value);
          setInputValue(e.target.value);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        style={style}
        required
        className={`bg-gray-50 border border-[#DFDFFF] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      >
        <option value="dd">
          Choose {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
