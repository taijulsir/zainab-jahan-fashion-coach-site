"use client";
import { useFetch } from "@/hooks";
import PodcastHeader from "./components/PodcastHeader";
import PodcastVideos from "./components/PodcastVideos";

const Podcast = () => {
  const { data } = useFetch("/podcast");

  const featuredPodcast =
    data?.data?.length && data?.data?.filter((podcast) => podcast?.isFeatured === true);

  return (
    <div className="bg-gradient-to-b from-[#F9F5EB] from-[65%] to-transparent to-[65%] px-8 py-10 lg:pr-20 2xl:py-20 2xl:pl-[6.8rem] 2xl:pr-[8.5rem]">
      {featuredPodcast && <PodcastHeader data={featuredPodcast[0]} />}
      <PodcastVideos data={data?.data} />
    </div>
  );
};

export default Podcast;
