import PodcastBannerImg from "@/assets/image/podcast_banner_img.jpeg";

const PodcastBanner = () => {
  return (
    <div
      className="relative h-[41.25rem] w-full bg-center lg:h-screen"
      style={{
        backgroundImage: `url(${PodcastBannerImg.src})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for opacity and blur */}
      <div className="absolute inset-0 flex items-end justify-center bg-[#FFFFFF] bg-opacity-50 py-[10rem] backdrop-blur-[12px] lg:py-[5.5rem] extraLg:py-[8rem] 2xl:py-[12.5rem]">
        <div className="w-[85%] max-w-[68.75rem] lg:w-[60%]">
          <h5 className="text-center font-anjelScript text-[38px] font-semibold text-[#4B3E48] md:text-5xl lg:leading-[100%] 2xl:text-[6.8rem] 2xl:font-normal">
            Zaynab’s Podcasts
          </h5>
          <h5 className="mx-auto mt-2 max-w-[46.875rem] text-center font-felixTitlin text-2xl font-normal text-[#4B3E48] md:text-3xl lg:mt-7 lg:text-3xl extraLg:text-4xl 2xl:text-5xl">
            {`Let’s Change your life for the better today !`}
          </h5>
          <div className="mt-4 space-y-4 text-start font-mada text-sm font-light text-[#4B3E48] md:text-base lg:mt-8 lg:text-center lg:text-base extraLg:text-xl 2xl:text-2xl">
            <p>{`Discover powerful conversations designed to inspire personal growth, build confidence, and ignite change. At Zaynab's Podcasts, we dive deep into topics that matter — from self-love and mindfulness to productivity and purpose. Every episode is crafted to empower you with tools, stories, and insights to help you create a life you truly love. Start your journey of transformation today — one episode at a time.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastBanner;
