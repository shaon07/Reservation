"use client";
import React, { useState } from "react";

interface HTMLInput {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "checkbox"
    | "radio"
    | "date"
    | "file"
    | "button"
    | "submit";
  label?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  onChange?: (data?: any) => void;
  onFocus?: (data?: any) => void;
  onBlur?: (data?: any) => void;
}

export default function InputBox({
  type = "text",
  id = "",
  name = "",
  disabled = false,
  placeholder = "",
  required = false,
  autoComplete = "",
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  label = "",
}: HTMLInput) {
  const [inputValue, setInputValue] = useState<any>();

  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-light text-gray-900 dark:text-white">
          {label}
          {required && <span className="text-red-500"> * </span>}
        </label>
      )}
      <input
        type={type}
        value={inputValue}
        id={id}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (type === "checkbox") {
            setInputValue(event.target.checked);
            onChange(event.target.checked);
          } else {
            setInputValue(event.target.value);
            onChange(event.target.value);
          }
        }}
        onFocus={(event: React.FocusEvent<HTMLInputElement>) => {
          onFocus(event.target.value);
        }}
        onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
          onBlur(event.target.value);
        }}
        className="bg-gray-50 border border-[#DFDFFF] text-gray-900 text-sm rounded-lg focus:ring-[#DFDFFF] focus:border-[#DFDFFF] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
