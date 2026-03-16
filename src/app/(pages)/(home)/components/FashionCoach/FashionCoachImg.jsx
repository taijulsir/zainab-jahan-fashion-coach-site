import { Env } from "@/utils";
import Image from "next/image";

const FashionCoachImg = ({ imgUrl }) => {
  return (
    <div className="relative mx-auto h-[23rem] w-[18.125rem] lg:h-[35rem] lg:w-[25rem] extraLg:h-[40rem] extraLg:w-[30rem] 2xl:h-[44.25rem] 2xl:w-[35rem]">
      <div className="absolute -right-3 -top-3 z-0 h-[16rem] w-[15.375rem] border border-[#2E272D] lg:-right-[3%] lg:-top-[3%] lg:h-[70%] lg:w-[85%]"></div>
      <Image src={Env.spaces_url + imgUrl} alt="" fill className="h-full w-full" />
    </div>
  );
};

export default FashionCoachImg;
