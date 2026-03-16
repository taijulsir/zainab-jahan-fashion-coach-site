"use client";

import ButtonWithBorder from "@/components/elements/ButtonWithBorder";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import FashionCoachImg from "../../FashionCoach/FashionCoachImg";
import AppContext from "@/context/AppContext";
import { useContext } from "react";

export default function ServiceCard({ item, idx }) {
  const { showModalToggle, setSelectCoach, setSessionId } = useContext(AppContext);
  return (
    <div id="service">
      <div
        className={`${idx % 2 === 0 ? "bg-gradient-to-b from-[#ECE3D8] via-[#F5EDE2] to-[#C0B3A1]" : "bg-white"}`}
      >
        <div
          className={`${idx === 0 ? "flex items-center justify-center pt-10 lg:pt-24" : "hidden"}`}
        >
          <p className="font-felixTitlin text-[24px] text-[#4B3E48] md:text-[32px] lg:text-[42px]">
            Let’s Change your life for <br /> the better today !
          </p>
        </div>
        <div
          className={`grid grid-cols-1 gap-10 px-6 pb-[6.25rem] pt-10 lg:flex lg:grid-cols-2 lg:gap-20 lg:px-0 lg:py-[3rem] extraLg:py-[6rem] 2xl:py-[6rem] ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} max-w-5xl xl:mx-auto 2xl:max-w-7xl`}
        >
          <div className="relative mt-0 flex items-start justify-start lg:mt-14 2xl:mt-[4rem]">
            <div>
              <p className="font-anjelScript text-[9.813rem] font-normal !leading-none text-[#4B3E48] md:text-[10.8rem] lg:text-[9rem] extraLg:text-[10.5rem] 2xl:text-[14rem]">
                {item?.serial}
              </p>
            </div>
            <div className="pt-12 lg:pt-10 extraLg:pt-12 2xl:pt-[4.5rem]">
              <FelixTitlinMainTitle
                title={item?.name}
                className={"!leading-tight text-[#4B3E48] underline 2xl:mt-8"}
              />
              <DynamicDetails
                details={item?.description}
                className={"mt-4 space-y-3 text-[#4B3E48] lg:mt-8 lg:space-y-4"}
              />
              <div className="mt-7 w-fit">
                <ButtonWithBorder
                  label={"Book a session"}
                  buttonClassName={
                    "min-w-[8.188rem] lg:min-w-[9.5rem] extraLg:min-w-[10.5rem] 2xl:min-w-[11.438rem]"
                  }
                  onClickHandle={() => {
                    setSelectCoach(item?.name), setSessionId(item?._id), showModalToggle();
                  }}
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <FashionCoachImg imgUrl={item?.image} />
          </div>
        </div>
      </div>
    </div>
  );
}
