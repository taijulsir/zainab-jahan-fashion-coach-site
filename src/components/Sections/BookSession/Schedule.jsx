"use client";
import OfflineImg from "@/assets/image/book-session/offline.png";
import OnlineImg from "@/assets/image/book-session/online.png";
import Image from "next/image";
import SessionCheckbox from "./SessionCheckbox";
import SessionHeaderTitle from "./SessionHeaderTitle";
import SessionNextButton from "./SessionNextButton";
import { useContext, useState } from "react";
import { useFetch } from "@/hooks";
import Loader from "@/components/elements/loader/Loader";
import AppContext from "@/context/AppContext";

const Schedule = ({
  setActiveTab,
  setSelectedSchedule,
  selectedSchedule,
  date,
  time,
  setDate,
  setTime,
  selectCoach,
  setSelectedScheduleFee,
}) => {
  const { data, isLoading } = useFetch("/sessiondetails");
  const { selectedSessionId } = useContext(AppContext);

  const [isError, setIsError] = useState(false);
  const handleNextAction = () => {
    if (selectedSchedule === "" || date === "" || time === "") {
      setIsError(true);
    } else {
      setActiveTab(3);
      setIsError(false);
    }
  };

  console.log(selectedSessionId, "selectedSessionId");

  const filteredData = data?.data?.filter((item) => item?.session?._id === selectedSessionId);

  console.log(filteredData, "filteredData ===");

  return (
    <div>
      <SessionHeaderTitle text={"Schedule a Session"} />
      <div className="mt-6 md:mt-8 lg:mt-[65px]">
        <div className="flex items-center justify-center gap-10">
          {isLoading && <Loader />}
          {filteredData?.map((item) => (
            <div key={item?.id}>
              <div>
                <div className="relative h-[4.875rem] w-[7.75rem] md:h-[6rem] md:text-[9rem] lg:h-[9.375rem] lg:w-[15rem]">
                  <Image
                    src={item?.name.includes("Offline") ? OfflineImg : OnlineImg}
                    alt=""
                    className="absolute bottom-0 top-0 z-10 h-full w-full border border-[#2E272D]"
                  />
                  <div className="absolute -bottom-1 -left-1 z-0 h-[3.938rem] w-[4.25rem] border border-[#2E272D] bg-[#2E272D] md:-bottom-2 md:-left-2 md:h-[4.5rem] md:w-[4.75rem] lg:-bottom-3 lg:-left-3 lg:h-[7.625rem] lg:w-[8.313rem]"></div>
                </div>
                <div className="relative">
                  <SessionCheckbox
                    typeId={selectedSessionId}
                    fee={item?.price}
                    text={item?.name + " ($" + item?.price + ")"}
                    className={"mt-7"}
                    selected={selectedSchedule}
                    setSelected={setSelectedSchedule}
                    setSelectedScheduleFee={setSelectedScheduleFee}
                    type={item?.name}
                  />
                  <span className="absolute left-4 font-mada text-[10px] text-[#4B3E48] md:left-7 md:text-sm">
                    {item?.name.includes("Offline") && (
                      <div>only available in {item?.location}</div>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-md p-2 text-start lg:flex-row lg:items-center lg:gap-5">
          <label className="hidden font-mada text-lg font-semibold text-[#4B3E48] lg:block lg:font-normal">
            Scheduling:
          </label>
          <label className="block font-mada text-lg font-semibold text-[#4B3E48] lg:hidden lg:font-normal">
            Scheduling (Date & Time)
          </label>
          <div className="flex w-full items-center gap-2 border border-[#4B3E48] bg-transparent p-1">
            <div className="w-[60%] lg:w-[65%]">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="day/month/year"
                className="w-full border-none bg-transparent px-2 py-1 font-mada text-sm font-normal text-[#4B3E48] outline-none lg:px-4 lg:py-2"
              />
            </div>
            <div className="w-[40%] border-l border-[#4B3E48] lg:w-[35%]">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border-none bg-transparent px-2 py-1 font-mada text-sm font-normal text-[#4B3E48] outline-none lg:px-4 lg:py-2"
              />
            </div>
          </div>
        </div>
        {isError && (
          <>
            <p className="mt-5 text-center font-mada text-xs font-normal text-red-600 md:text-sm lg:text-lg">
              {selectedSchedule === ""
                ? "Please select type of session"
                : date === ""
                  ? "Please select session date"
                  : time === ""
                    ? "Please select session time"
                    : ""}
            </p>
          </>
        )}
        <div className="ml-auto mr-auto mt-12 max-w-[8.625rem] lg:mr-0 lg:mt-[65px] lg:max-w-[11.625rem]">
          <SessionNextButton className={""} onClick={handleNextAction} />
        </div>
      </div>
    </div>
  );
};
export default Schedule;
