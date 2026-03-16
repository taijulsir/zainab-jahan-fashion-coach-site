import { YouTubeEmbed } from "@next/third-parties/google";

const PodcastHeader = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-[60%_40%] lg:gap-0">
      <div className="2xl:pl-20 2xl:pr-12">
        <h5 className="text-start font-anjelScript text-[42px] font-medium text-[#4B3E48] md:text-5xl lg:leading-[100%] 2xl:text-[6.8rem]">
          Featured Podcast
        </h5>
        <h5 className="mt-2 text-start font-felixTitlin text-2xl font-normal text-[#4B3E48] md:text-3xl lg:mt-10 lg:text-3xl extraLg:text-4xl 2xl:text-5xl">
          {data?.title}
        </h5>
        <div className="mt-4 space-y-4 font-mada text-sm font-light text-[#4B3E48] md:text-base lg:mt-8 lg:text-base extraLg:text-xl 2xl:text-2xl">
          <p>{`${data?.description}`}</p>
        </div>
      </div>
      <div className="relative mx-auto h-fit min-h-[10rem] w-full min-w-[17.5rem] max-w-[17.5rem] lg:max-w-[39rem]">
        <div className="absolute -bottom-2 -left-2 z-0 h-[7.5rem] w-[7.5rem] border border-[#2E272D] md:-bottom-3 md:-left-3 md:h-[7.5rem] md:w-[8rem] lg:-bottom-[5.5%] lg:-left-[3%] lg:h-[49%] lg:w-[42%]"></div>
        <div className="absolute -right-2 -top-2 z-0 h-[7.5rem] w-[7.5rem] border border-[#2E272D] md:-right-3 md:-top-3 md:h-[7.5rem] md:w-[8rem] lg:-right-[3%] lg:-top-[5.5%] lg:h-[49%] lg:w-[42%]"></div>
        <YouTubeEmbed videoid={data?.link} />
      </div>
    </div>
  );
};

export default PodcastHeader;
