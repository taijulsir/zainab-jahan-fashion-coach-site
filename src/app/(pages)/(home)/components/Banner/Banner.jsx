"use client";
import BannerImg from "@/assets/image/home/banner_img.png";
import Logo from "@/assets/image/logo.png";
import AnjelScriptMainTitle from "@/components/elements/AnjelScriptMainTitle";
import ButtonWithBorder from "@/components/elements/ButtonWithBorder";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="grid h-auto grid-cols-1 bg-gradient-to-b from-[#ECE3D8] via-[#F5EDE2] to-[#C0B3A1] lg:h-screen lg:grid-cols-2">
      <div className="relative order-2 lg:order-1">
        <div className="h-full w-full bg-gradient-to-b from-[#ECE3D8] via-[#F5EDE2] to-[#C0B3A1] lg:absolute lg:h-[110%]">
          <div className="mx-auto h-full w-full max-w-[42.5rem] px-12 pb-8 pt-8 lg:w-[80%] lg:px-0 lg:pb-0 lg:pt-20 extraLg:pt-28 2xl:pt-[160px]">
            <div className="mx-auto w-fit">
              <Image src={Logo} alt="" className="w-[6.25rem] lg:h-[7rem] lg:w-[9rem]" />
            </div>
            <AnjelScriptMainTitle
              title={"Let’s Connect"}
              className={"mt-7 text-center text-[#000000] lg:mt-5 extraLg:mt-12 2xl:mt-16"}
            />
            <FelixTitlinMainTitle
              title={"Unlock your best self with confidence, style and charm"}
              className={"mt-3 text-center text-[#000000] lg:mt-5"}
            />
            <DynamicDetails
              details={`<p>Whether you're dressing to impress or stepping into the dating scene with renewed confidence, I'm here to guide your journey. As a fashion and dating coach, I combine style expertise with personal insight to help you express your most authentic, confident self.From elevating your wardrobe to navigating first impressions, I’ll help you show up with charm, elegance, and clarity in every moment that matters.</p>`}
              className={"mt-3 text-[#4B3E48] lg:mt-5 extraLg:mt-6 2xl:mt-8"}
            />

            <div className="mx-auto mt-5 w-fit md:mt-7 lg:mt-10">
              <ButtonWithBorder
                label={"Learn more"}
                buttonClassName={
                  " min-w-[8.625rem] lg:min-w-[9.5rem] extraLg:min-w-[10rem] 2xl:min-w-[11.438rem]"
                }
                onClickHandle={() => router.push("/about")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 min-h-[24.375rem] px-5 lg:order-2 lg:px-0">
        <Image src={BannerImg} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Banner;
