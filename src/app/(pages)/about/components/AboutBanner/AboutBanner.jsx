"use client";
import AnjelScriptMainTitle from "@/components/elements/AnjelScriptMainTitle";
import ButtonWithBorder from "@/components/elements/ButtonWithBorder";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutBanner = () => {
  const router = useRouter();
  return (
    <div className="grid h-auto grid-cols-1 bg-gradient-to-b from-[#ECE3D8] via-[#F5EDE2] to-[#C0B3A1] lg:h-screen lg:grid-cols-[41%_59%]">
      <div className="relative w-[90%] lg:w-full">
        <div className="h-full w-full lg:absolute lg:h-[110%] lg:pt-[7.6rem]">
          <Image
            src={
              "https://e-commerce-test.sgp1.digitaloceanspaces.com/zainab/1745816387132-image0 1.png"
            }
            alt="About Hero"
            className="h-full w-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="flex h-full items-center justify-start px-10 lg:px-0">
        <div className="max-w-[30rem] pb-10 pt-7 lg:pb-0 lg:pl-[4rem] lg:pt-0 extraLg:max-w-[38rem] extraLg:pl-[5rem] 2xl:max-w-[50rem] 2xl:pl-[8rem]">
          <AnjelScriptMainTitle
            title={"Let’s Connect"}
            className={"mt-0 text-start text-[#000000] lg:mt-5 extraLg:mt-12 2xl:mt-16"}
          />
          <FelixTitlinMainTitle
            title={"Unlock your best self with confidence, style and charm"}
            className={"mt-3 text-start !leading-tight text-[#000000] lg:mt-5"}
          />
          <DynamicDetails
            details={`<p>Discover the power of personal style and emotional clarity to attract love and radiate confidence—inside and out. Your journey to self-love and true connection starts here.</p>`}
            className={"mt-3 text-[#4B3E48] lg:mt-8"}
          />
          <div className="mt-5 w-fit md:mt-7 lg:mt-10">
            <ButtonWithBorder
              onClickHandle={() => router.push("#milestones")}
              label={"Learn more"}
              buttonClassName={" min-w-[8.625rem] lg:min-w-[11.438rem]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
