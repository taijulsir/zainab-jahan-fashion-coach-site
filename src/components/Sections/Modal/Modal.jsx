"use client";
import AppContext from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";

const Modal = ({ children, className, bodyClassName }) => {
  const { showModal, showModalToggle } = useContext(AppContext);
  const [show, setShow] = useState(showModal);

  useEffect(() => {
    if (showModal) {
      setShow(true);
      setTimeout(() => document.body.classList.add("no-scroll"), 300);
    } else {
      document.body.classList.remove("no-scroll");
      setTimeout(() => setShow(false), 600); // Matches CSS transition time
    }
  }, [showModal]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#1111119f] transition-opacity duration-500 ease-in-out ${className}`}
      onClick={showModalToggle}
    >
      <div
        className={`max-h-[80%] w-full shadow-xl lg:w-fit ${bodyClassName} ${showModal ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"} transform transition-all duration-500 ease-in-out`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;
