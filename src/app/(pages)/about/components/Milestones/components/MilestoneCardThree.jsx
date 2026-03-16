import MilestoneThreeImg from "@/assets/image/about/milestone_img_3.png";
import AnjelScriptMainTitle from "@/components/elements/AnjelScriptMainTitle";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import MilestoneCardImg from "./MilestoneCardImg";

const MilestoneCardThree = () => {
  return (
    <div className="mx-auto grid w-[80%] grid-cols-1 gap-4 py-6 lg:w-[87%] lg:grid-cols-2 lg:gap-0 lg:py-[3rem] extraLg:py-[4.5rem] 2xl:py-[7rem]">
      <div className="order-2 lg:order-1">
        <div className="mx-auto max-w-[41rem]">
          <AnjelScriptMainTitle
            title={"Let’s Connect"}
            className={"mt-0 text-start text-[#000000] lg:mt-5 extraLg:mt-12 2xl:mt-16"}
          />
          <FelixTitlinMainTitle
            title={"From Passion to Purpose"}
            className={"mt-3 text-start !leading-tight text-[#000000] lg:mt-5"}
          />

          <DynamicDetails
            details={`<p>Today, I work as a fashion and dating coach, guiding people to show up as their authentic, radiant selves—inside and out. Whether it’s through styling or deep conversations, I help others align with their worth, their desires, and their unique energy in love. Because everyone deserves to be seen, loved, and celebrated.
</p>`}
            className={"mt-3 text-[#4B3E48] lg:mt-8"}
          />
        </div>
      </div>
      <div className="order-1 flex items-center justify-end lg:order-2 lg:justify-center lg:pr-7 extraLg:justify-end extraLg:pr-12 2xl:pr-7">
        <MilestoneCardImg image={MilestoneThreeImg} />
      </div>
    </div>
  );
};

export default MilestoneCardThree;
