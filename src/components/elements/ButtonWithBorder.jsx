"use client";
import { cn } from "@/lib/utils";
import React from "react";

export default function ButtonWithBorder({
  label,
  buttonClassName,
  divClassName,
  onClickHandle,
  type = "button",
}) {
  return (
    <div
      className={cn("w-fit border border-[#4B3E48] p-2", divClassName)}
      onClick={() => onClickHandle()}
    >
      <button
        className={cn(
          `group relative isolation-auto z-10 mx-auto flex items-center justify-center gap-2 overflow-hidden bg-[#4B3E48] px-4 py-2 text-sm shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:transition-all before:duration-700 before:[background-image:linear-gradient(360deg,#A3938C,#D9CEC5,#F5EDE2,#C9BEB5,#9A8D87)] hover:text-[#4B3E48] before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 md:text-base lg:text-lg lg:font-semibold`,
          buttonClassName,
        )}
        type={type}
      >
        {label}
      </button>
    </div>
  );
}
