import Image from "next/image";

const MilestoneCardImg = ({ image }) => {
  return (
    <div className="relative mx-auto h-[23rem] w-[18.125rem] lg:mx-0 lg:h-[23rem] lg:w-[20rem] extraLg:h-[40rem] extraLg:w-[30rem] 2xl:h-[48rem] 2xl:w-[38rem]">
      <div className="absolute -right-3 -top-3 z-0 h-[16rem] w-[15.375rem] border border-[#2E272D] lg:-right-[3%] lg:-top-[3%] lg:h-[80%] lg:w-[85%]"></div>
      <Image src={image} alt="" fill className="h-full w-full object-cover" />
    </div>
  );
};

export default MilestoneCardImg;
