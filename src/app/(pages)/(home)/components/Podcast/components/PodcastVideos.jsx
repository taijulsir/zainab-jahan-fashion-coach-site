import ButtonWithBorder from "@/components/elements/ButtonWithBorder";
import PodcastVideo from "@/components/elements/PodcastVideo";
import { useRouter } from "next/navigation";

const PodcastVideos = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      <h5 className="mb-10 mt-14 max-w-[9.375rem] -rotate-[25deg] text-start font-anjelScript text-[2.625rem] font-semibold !leading-[2.625rem] text-[#4B3E48] md:text-5xl lg:mb-0 lg:mt-10 lg:max-w-[16rem] lg:text-[4rem] lg:font-medium lg:font-normal lg:!leading-[4rem] 2xl:mt-20 2xl:max-w-[29.6rem] 2xl:text-[6.8rem] 2xl:!leading-[6.8rem]">
        Previous Episodes
      </h5>
      <div className="ml-auto pr-0 lg:-mt-4 lg:w-[85%] lg:pr-2 extraLg:pr-6 2xl:-mt-5 2xl:pr-0">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5 extraLg:gap-7 2xl:gap-8">
          {data?.slice(0, 4).map((singleData, index) => (
            <PodcastVideo videoid={singleData?.link} key={index} singleData={singleData} />
          ))}
        </div>
        <div className="mt-10 w-fit lg:mt-[3.5rem] extraLg:mt-[4.5rem] 2xl:mt-[6.8rem]">
          <ButtonWithBorder
            label={"View all"}
            buttonClassName={
              " min-w-[8.188rem] lg:min-w-[9.5rem] extraLg:min-w-[10.5rem] 2xl:min-w-[11.438rem]"
            }
            onClickHandle={() => router.push("/podcast")}
          />
        </div>
      </div>
    </div>
  );
};

export default PodcastVideos;
