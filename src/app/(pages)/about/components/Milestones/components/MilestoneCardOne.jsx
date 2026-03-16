import MilestoneOneImg from "@/assets/image/about/milestone_img_1.png";
import AnjelScriptMainTitle from "@/components/elements/AnjelScriptMainTitle";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import MilestoneCardImg from "./MilestoneCardImg";

const MilestoneCardOne = () => {
  return (
    <div className="mx-auto grid w-[80%] grid-cols-1 gap-4 py-6 lg:w-[87%] lg:grid-cols-2 lg:gap-0 lg:py-[3rem] extraLg:py-[4.5rem] 2xl:py-[7rem]">
      <div className="order-2 lg:order-1">
        <div className="mx-auto max-w-[41rem]">
          <AnjelScriptMainTitle
            title={"Let’s Connect"}
            className={"mt-0 text-start text-[#000000] lg:mt-5 extraLg:mt-12 2xl:mt-16"}
          />
          <FelixTitlinMainTitle
            title={"The Foundation of My Journey"}
            className={"mt-3 text-start !leading-tight text-[#000000] lg:mt-5"}
          />
          <DynamicDetails
            details={`<p>I grew up in a middle-income family where love, respect, and education were the core values that shaped me. While we didn’t have everything, I was always encouraged to dream big and be true to myself. From a young age, I was drawn to fashion—not just for the clothes, but for how it made me feel. Confident. Empowered. Seen. At the same time, I found myself naturally helping friends and even strangers navigate their dating lives. I could easily sense what people needed—not just in a partner, but within themselves.</p>`}
            className={"mt-3 text-[#4B3E48] lg:mt-8"}
          />
        </div>
      </div>
      <div className="order-1 flex items-center justify-end lg:order-2 lg:justify-center lg:pr-7 extraLg:justify-end extraLg:pr-12 2xl:pr-7">
        <MilestoneCardImg image={MilestoneOneImg} />
      </div>
    </div>
  );
};

export default MilestoneCardOne;
