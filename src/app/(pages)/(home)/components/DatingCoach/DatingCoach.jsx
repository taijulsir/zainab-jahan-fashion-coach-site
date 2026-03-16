"use client";
import DatingCoachImg from "@/assets/image/home/dating_coach_img.jpeg";
import ButtonWithBorder from "@/components/elements/ButtonWithBorder";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import { useContext } from "react";

const DatingCoach = () => {
  const { showModal, showModalToggle, setSelectCoach } = useContext(AppContext);
  return (
    <div className="mt-[250px] px-8 pb-10 pt-10 lg:mt-0 lg:px-0 lg:pb-[6rem] lg:pt-[10rem] extraLg:pt-[12rem] 2xl:pt-[14rem]">
      <div className="mx-auto grid max-w-[98.5rem] grid-cols-1 gap-10 lg:w-[85%] lg:grid-cols-2 lg:gap-0">
        <div className="order-2 pt-6 lg:order-1">
          <div className="relative h-[23rem] w-[18.125rem] lg:h-[35rem] lg:w-[25rem] extraLg:h-[40rem] extraLg:w-[30rem] 2xl:h-[44.25rem] 2xl:w-[35rem]">
            <div className="absolute -right-3 -top-3 z-0 h-[16rem] w-[15.375rem] border border-[#2E272D] lg:-right-[3%] lg:-top-[3%] lg:h-[70%] lg:w-[85%]"></div>
            <Image src={DatingCoachImg} alt="" fill className="h-full w-full" />
          </div>
        </div>
        <div className="order-1 flex max-w-[31rem] items-start justify-start gap-6 pr-0 lg:order-2 lg:pr-4 extraLg:max-w-[40rem] 2xl:max-w-[48.2rem]">
          <div>
            <p className="font-anjelScript text-[9.813rem] font-normal !leading-none text-[#4B3E48] md:text-[10.8rem] lg:text-[9rem] extraLg:text-[10.5rem] 2xl:text-[14rem]">
              2
            </p>
          </div>
          <div className="max-w-[35.5rem] pt-12 lg:pt-10 extraLg:pt-12 2xl:pt-[4.5rem]">
            <FelixTitlinMainTitle
              title={"Dating Coach"}
              className={"!leading-tight text-[#4B3E48] underline 2xl:mt-8"}
            />
            <DynamicDetails
              details={`
                <p>Discover the secrets to attracting meaningful connections and building the love life you deserve.My dating coaching services are designed to empower you with the confidence, skills, and mindset needed to navigate modern relationships with ease. </p>
                <p>Whether you’re looking to make unforgettable first impressions, improve your communication, or overcome dating challenges, I’ll guide you every step of the way. Let’s transform your dating journey—starting today! </p>
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
                  setSelectCoach("Dating"), showModalToggle();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatingCoach;
