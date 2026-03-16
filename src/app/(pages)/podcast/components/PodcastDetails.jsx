"use client";
import AnjelScriptMainTitle from "@/components/elements/AnjelScriptMainTitle";
import ButtonWithBorder from "@/components/elements/ButtonWithBorder";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import PodcastVideo from "@/components/elements/PodcastVideo";
import { useFetch } from "@/hooks";

const PodcastDetails = () => {
  const { data } = useFetch("/podcast");

  return (
    <div className="mx-auto w-[85%] pt-16 lg:w-[80%] lg:pt-20 extraLg:pt-[5rem] 2xl:pt-[8.5rem]">
      <AnjelScriptMainTitle title={"Let’s Connect"} className={"text-center text-[#000000]"} />
      <FelixTitlinMainTitle
        title={"Building Meaningful Conversations That Spark Real Change"}
        className={
          "mt-3 w-full max-w-[75rem] text-center !leading-tight text-[#000000] lg:mx-auto lg:mt-8 lg:w-[80%] extraLg:w-full"
        }
      />
      <DynamicDetails
        details={`
                <p>Whether you're seeking clarity, healing, or a little motivation, I'm here to listen, support, and grow with you. Reach out, share your story, or simply say hello — because every great journey begins with a single connection. </p>
                <p>Let’s start yours today.</p>
                `}
        className={"mt-4 space-y-3 text-center text-[#4B3E48] lg:mt-8 lg:space-y-4"}
      />

      <div className="py-8 lg:py-10 extraLg:py-12 2xl:py-[3.75rem]">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5 extraLg:gap-7 2xl:gap-8">
          {data?.data?.map((singleData, index) => (
            <PodcastVideo singleData={singleData} videoid={singleData?.link} key={index} />
          ))}
        </div>
        {/* <div className="mx-auto mt-10 w-fit lg:mt-10 extraLg:mt-12 2xl:mt-[3.75rem]">
          <ButtonWithBorder
            label={"See more"}
            buttonClassName={
              " min-w-[8.188rem] lg:min-w-[9.5rem] extraLg:min-w-[10.5rem] 2xl:min-w-[11.438rem]"
            }
          />
        </div> */}
      </div>
    </div>
  );
};

export default PodcastDetails;
