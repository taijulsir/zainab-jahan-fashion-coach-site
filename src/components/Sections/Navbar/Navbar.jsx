"use client";
import LogoImg from "@/assets/image/logo.png";
import SmNavbarBg from "@/assets/image/sm_navbar_bg.png";
import { navLinks } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import BookSessionButton from "../BookSession/BookSessionButton";
import AppContext from "@/context/AppContext";

const Navbar = ({}) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const sidebarRef = useRef(null);
  const { showModal, showModalToggle } = useContext(AppContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowNavbar(false);
      }
    };

    if (showNavbar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNavbar]);
  return (
    <>
      <div>
        {/* mobile navbar */}
        <div className="fixed right-0 z-20 h-20 w-20 lg:hidden">
          <div
            className="flex h-full w-full items-center justify-end pr-5"
            style={{
              backgroundImage: `url(${SmNavbarBg.src})`,
              backgroundOpacity: 0.5, // Note: This doesn't work; opacity needs to be handled differently
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <CgMenuLeft
              onClick={() => setShowNavbar(!showNavbar)}
              className="rotate-180 text-3xl text-black"
            />
          </div>
          <div
            ref={sidebarRef}
            className={`glass-sidebar absolute right-0 top-0 z-40 grid h-screen w-[105px] transform grid-rows-[15%_50%_35%] items-start py-8 transition-transform duration-500 ease-in-out ${showNavbar ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Logo */}
            <Link href={"/"} onClick={() => setShowNavbar(!showNavbar)}>
              <Image src={LogoImg} alt="Zayad Jahn Logo" className="mx-auto w-20" />
            </Link>

            {/* Menu Items */}
            <div className="grid h-full w-full grid-cols-1 items-center justify-between text-center font-mada text-base font-medium uppercase text-[#4B3E48] lg:text-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="flex rotate-90 transform items-center justify-center hover:text-black"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Book a Session Button */}
            <div className="flex h-full w-full items-center justify-center">
              <BookSessionButton isNavbar={true} showModalToggle={showModalToggle} className={""} />
            </div>
          </div>
        </div>
        {/* web navbar */}
        <div className="glass-sidebar fixed right-0 z-30 hidden h-screen grid-rows-[10%_65%_25%] items-center lg:grid lg:w-[85px] lg:py-3 extraLg:w-[95px] extraLg:py-6 2xl:w-[105px] 2xl:py-8">
          {/* Logo */}
          <Link href={"/"}>
            <Image src={LogoImg} alt="Zayad Jahn Logo" className="mx-auto w-20" />
          </Link>
          {/* Menu Items */}
          <div className="grid h-full w-full grid-cols-1 items-center justify-between text-center font-mada text-sm font-medium uppercase text-[#4B3E48] lg:text-lg extraLg:text-xl 2xl:text-2xl">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.link} className="rotate-90 transform hover:text-black">
                {link.title}
              </Link>
            ))}
          </div>

          {/* Book a Session Button */}
          <div className="relative grid h-full w-full items-center justify-center">
            <BookSessionButton isNavbar={true} showModalToggle={showModalToggle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
