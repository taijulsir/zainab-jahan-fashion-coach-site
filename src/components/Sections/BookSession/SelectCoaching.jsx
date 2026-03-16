"use client";
import Loader from "@/components/elements/loader/Loader";
import { Env } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import SessionCheckbox from "./SessionCheckbox";
import SessionHeaderTitle from "./SessionHeaderTitle";
import SessionNextButton from "./SessionNextButton";
import { useFetch } from "@/hooks";

const SelectCoaching = ({ setActiveTab, selectCoach, setSelectCoach, setSelectedScheduleFee }) => {
  const { data, isLoading } = useFetch("/session");

  const [isError, setIsError] = useState(false);
  const handleNextAction = () => {
    if (selectCoach === "") {
      setIsError(true);
    } else {
      setActiveTab(2);
      setIsError(false);
    }
  };
  return (
    <div>
      <SessionHeaderTitle text={"Select Coaching"} />
      <div className="mt-6 md:mt-8 lg:mt-[65px]">
        <div className="flex items-center justify-center gap-6 lg:gap-10">
          {isLoading && <Loader />}

          <div className="grid max-h-[22rem] grid-cols-2 gap-12 overflow-y-auto overflow-x-hidden">
            {data?.data?.length > 0 &&
              data?.data?.map((item, index) => (
                <div key={index} className="h-full">
                  <div className="relative h-[10rem] w-[8rem] md:h-[10rem] md:w-[8rem] md:text-[12rem] lg:h-[18rem] lg:w-[15rem]">
                    <Image
                      src={Env.spaces_url + item?.image}
                      width={800}
                      height={800}
                      alt=""
                      className="absolute bottom-0 top-0 z-10 h-full w-full"
                    />
                    <div className="absolute -bottom-1 -left-1 z-0 h-[3.938rem] w-[4.25rem] border border-[#2E272D] md:-bottom-2 md:-left-2 md:h-[4.5rem] md:w-[4.75rem] lg:-bottom-3 lg:-left-3 lg:h-[7.625rem] lg:w-[8.313rem]"></div>
                  </div>

                  <SessionCheckbox
                    typeId={item?._id}
                    text={item?.name}
                    className={"mt-7"}
                    selected={selectCoach}
                    setSelected={setSelectCoach}
                    type={item?.name}
                    setSelectedScheduleFee={setSelectedScheduleFee}
                  />
                </div>
              ))}
          </div>
        </div>
        {isError && (
          <p className="mt-5 text-center font-mada text-xs font-normal text-red-600 md:text-sm lg:text-lg">
            Please select coaching
          </p>
        )}
        <div className="ml-auto mr-auto mt-12 max-w-[8.625rem] lg:mr-0 lg:mt-[65px] lg:max-w-[11.625rem]">
          <SessionNextButton className={""} onClick={handleNextAction} />
        </div>
      </div>
    </div>
  );
};
export default SelectCoaching;
