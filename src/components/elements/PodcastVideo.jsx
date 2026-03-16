import { YouTubeEmbed } from "@next/third-parties/google";

const PodcastVideo = ({ videoid, singleData }) => {
  function formatToMonthDayYear(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short", // "Jan", "Feb", etc.
      day: "numeric", // 15
      year: "numeric", // 2025
    });
  }
  return (
    <div>
      <div className="relative h-fit max-w-[39rem] border border-[#4B3E48]">
        <div className="absolute -bottom-[6px] -left-[6px] z-0 h-[5rem] w-[5.313rem] border border-[#2E272D] md:-bottom-2 md:-left-2 md:h-[6rem] md:w-[6rem] lg:-bottom-[6%] lg:-left-[4%] lg:h-[81%] lg:w-[54%]"></div>
        <YouTubeEmbed videoid={videoid} />
      </div>
      <div className="-ml-1 mt-3 lg:-ml-3 lg:mt-5 extraLg:mt-7 2xl:mt-10">
        <h5 className="font-mada text-xs font-medium text-[#4B3E48] md:text-sm lg:text-base lg:font-normal extraLg:text-xl 2xl:text-2xl">
          {singleData?.title}
        </h5>
        <p className="mt-1 font-mada text-xs font-normal text-[#4B3E48] md:text-sm lg:mt-2 lg:text-base lg:font-light extraLg:text-xl 2xl:text-2xl">
          {formatToMonthDayYear(singleData?.publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default PodcastVideo;
