import MilestoneTwoImg from "@/assets/image/about/milestone_img_2.png";
import AnjelScriptMainTitle from "@/components/elements/AnjelScriptMainTitle";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import MilestoneCardImg from "./MilestoneCardImg";

const MilestoneCardTwo = () => {
  return (
    <div className="relative mx-auto grid w-full grid-cols-1 gap-5 py-6 lg:w-[87%] lg:grid-cols-2 lg:gap-0 lg:py-[4rem] extraLg:py-[5.5rem] 2xl:py-[8rem]">
      <div className="absolute right-0 top-[40%] -z-10 h-full w-full bg-gradient-to-b from-[#ECE3D8] via-[#F5EDE2] to-[#C0B3A1] lg:-top-[25%] lg:w-[70%]"></div>
      <div className="flex items-center justify-end pr-7 md:pr-8 lg:pr-12 extraLg:pr-10 2xl:pr-7">
        <MilestoneCardImg image={MilestoneTwoImg} />
      </div>
      <div className="mx-auto w-[80%] lg:ml-0 lg:w-[90%] 2xl:w-full">
        <div className="mx-auto max-w-[41rem]">
          <AnjelScriptMainTitle
            title={"Let’s Connect"}
            className={"mt-0 text-start text-[#000000] lg:mt-5 extraLg:mt-12 2xl:mt-16"}
          />
          <FelixTitlinMainTitle
            title={"A Turning Point During the Pandemic"}
            className={"mt-3 text-start !leading-tight text-[#000000] lg:mt-5"}
          />
          <DynamicDetails
            details={`<p>In 2020, when the world paused during the pandemic, something in me awakened. I realized it was time to bring both of my passions together. I began coaching people—virtually at first—helping them elevate their style and understand their own emotional and relationship needs. I saw transformation not just in appearance, but in confidence, clarity, and connection.
</p>`}
            className={"mt-3 text-[#4B3E48] lg:mt-8"}
          />
        </div>
      </div>
    </div>
  );
};

export default MilestoneCardTwo;
