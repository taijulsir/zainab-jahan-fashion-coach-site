import MilestoneCardOne from "./components/MilestoneCardOne";
import MilestoneCardThree from "./components/MilestoneCardThree";
import MilestoneCardTwo from "./components/MilestoneCardTwo";

const Milestones = () => {
  return (
    <div className="pt-10 md:pt-14 lg:pt-[10rem] extraLg:pt-[13rem] 2xl:pt-[15rem]" id="milestones">
      <h5 className="mx-auto max-w-[19rem] text-center font-felixTitlin text-2xl font-normal text-[#4B3E48] md:text-3xl lg:max-w-[31rem] lg:text-4xl extraLg:text-5xl">
        Milestones in her coaching journey
      </h5>
      <div>
        <MilestoneCardOne />
        <MilestoneCardTwo />
        <MilestoneCardThree />
      </div>
    </div>
  );
};

export default Milestones;
