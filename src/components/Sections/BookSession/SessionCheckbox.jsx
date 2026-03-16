"use client";
import AppContext from "@/context/AppContext";
import { useCallback, useContext, useEffect, useState } from "react";

export default function SessionCheckbox({
  className,
  text,
  selected,
  setSelected,
  type,
  setSelectedScheduleFee,
  fee = 0,
  typeId,
}) {
  const { setselectedSessionId } = useContext(AppContext);
  const handleClick = useCallback(() => {
    if (selected === type) {
      setSelected(""); // Unselect if already selected
    } else {
      setSelected(type); // Set to this type
      setSelectedSessionTypeId(typeId);
    }
  }, [selected, type, setSelected, typeId]);

  const checked = selected === type;

  useEffect(() => {
    if (checked) {
      setSelectedScheduleFee(fee);
      setselectedSessionId(typeId);
    }
  }, [checked, fee, setSelectedScheduleFee, typeId]);

  return (
    <label
      className={`relative flex cursor-pointer touch-manipulation select-none items-center justify-start gap-2 lg:gap-3 ${className}`}
    >
      <input type="checkbox" checked={checked} onChange={handleClick} className="hidden" />
      <div
        className={`relative h-3 w-3 rounded-[8px] transition-transform duration-200 ease-in-out md:h-4 md:w-4 lg:h-4 lg:w-4 ${checked ? "animate-bounce" : ""}`}
      >
        <div
          className={`absolute inset-0 rounded-[4px] border-2 transition-all duration-200 ease-in-out ${checked ? "border-[#4B3E48] bg-[#4B3E48]" : "border-[#4B3E48] bg-white"}`}
        />
        <svg
          fill="none"
          viewBox="0 0 24 24"
          className={`absolute inset-0 m-auto h-[70%] w-[70%] transform text-white transition-transform duration-200 ease-in-out ${checked ? "scale-100" : "scale-0"}`}
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
            stroke="currentColor"
            d="M4 12L10 18L20 6"
            className={`stroke-current transition-[stroke-dashoffset] delay-100 duration-300 ease-in-out ${checked ? "stroke-dashoffset-0" : "stroke-dashoffset-[40px]"} [stroke-dasharray:40]`}
          />
        </svg>
      </div>
      <p className="font-mada text-xs font-normal capitalize text-[#4B3E48] md:text-sm lg:text-lg">
        {text}
      </p>
    </label>
  );
}
