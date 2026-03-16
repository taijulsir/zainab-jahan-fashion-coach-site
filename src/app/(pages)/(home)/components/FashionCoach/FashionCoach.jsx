"use client";
import ButtonWithBorder from "@/components/elements/ButtonWithBorder";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import AppContext from "@/context/AppContext";
import { useContext } from "react";
import FashionCoachImg from "./FashionCoachImg";

const FashionCoach = () => {
  const { showModal, showModalToggle, setSelectCoach } = useContext(AppContext);
  return (
    <div className="" id="service">
      <div className="grid grid-cols-1 gap-10 bg-gradient-to-b from-[#ECE3D8] via-[#F5EDE2] to-[#C0B3A1] px-6 pb-[6.25rem] pt-10 lg:grid-cols-2 lg:gap-0 lg:px-0 lg:py-[3rem] extraLg:py-[6rem] 2xl:py-[6rem]">
        <div className="relative mx-auto mt-0 flex max-w-[31rem] items-start justify-start lg:mt-14 extraLg:max-w-[40rem] 2xl:mt-[4rem] 2xl:max-w-[48.2rem]">
          <div>
            <p className="font-anjelScript text-[9.813rem] font-normal !leading-none text-[#4B3E48] md:text-[10.8rem] lg:text-[9rem] extraLg:text-[10.5rem] 2xl:text-[14rem]">
              1
            </p>
          </div>
          <div className="pt-12 lg:pt-10 extraLg:pt-12 2xl:pt-[4.5rem]">
            <FelixTitlinMainTitle
              title={"Fashion Coach"}
              className={"!leading-tight text-[#4B3E48] underline 2xl:mt-8"}
            />
            <DynamicDetails
              details={`
                <p>Redefine your style and step into a world of confidence and sophistication. My tailored fashion coaching services are designed to help you curate a wardrobe that reflects your individuality.</p>
                <p>Whether you’re refreshing your image or simply seeking to elevate your personal style,  it’s an investment in your confidence and presence. Let’s craft a style that truly speaks to who you are.</p>
                `}
              className={"mt-4 space-y-3 text-[#4B3E48] lg:mt-8 lg:space-y-4"}
            />
            <div className="mt-7 w-fit">
              <ButtonWithBorder
                label={"Book a session"}
                buttonClassName={
                  "min-w-[8.188rem] lg:min-w-[9.5rem] extraLg:min-w-[10.5rem] 2xl:min-w-[11.438rem]"
                }
                onClickHandle={() => {
                  setSelectCoach("fashion"), showModalToggle();
                }}
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-[15%] mx-auto h-full w-full">
            <FashionCoachImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionCoach;
