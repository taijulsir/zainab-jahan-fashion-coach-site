import AboutImg from "@/assets/image/home/about_img.png";
import AnjelScriptMainTitle from "@/components/elements/AnjelScriptMainTitle";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import Image from "next/image";

const About = () => {
  return (
    <div className="grid grid-cols-[20%_80%] overflow-hidden bg-gradient-to-l from-[#F9F5EB] from-[80%] to-transparent to-[80%]">
      <div className="relative">
        <Image
          src={AboutImg}
          alt="about_img"
          className="absolute hidden max-w-[20rem] lg:-right-[10rem] lg:bottom-20 lg:block extraLg:-right-[15rem] extraLg:bottom-11 extraLg:max-w-[25rem] 2xl:-right-[20rem] 2xl:bottom-14 2xl:max-w-[32.5rem]"
        />
      </div>
      <div className="pb-10 pl-5 pr-10 pt-16 lg:py-[6rem] lg:pl-14 lg:pr-14 extraLg:py-[9rem] extraLg:pl-16 extraLg:pr-16 2xl:py-[12rem] 2xl:pl-20 2xl:pr-20">
        <AnjelScriptMainTitle title={"I am Zaynab Jahan"} className={"text-[#4B3E48]"} />
        <FelixTitlinMainTitle
          title={
            "And I’m here to help you transform your life and make an impact that truly matters"
          }
          className={
            "mt-3 w-full max-w-[75rem] !leading-tight text-[#4B3E48] lg:mt-8 lg:w-[90%] extraLg:w-full"
          }
        />

        <div className="mx-auto mt-4 md:mt-8 lg:mt-10 lg:max-w-[26rem] extraLg:max-w-[35rem] 2xl:mt-20 2xl:max-w-[41rem]">
          <DynamicDetails
            details={`
                <p>Whether you’re looking to boost your confidence, achieve your goals, or create meaningful connections, I’ll guide you every step of the way.</p>
                <p>With a proven approach tailored to your unique needs, I’ll help you unlock your potential and take charge of your future. This isn’t just coaching—it’s the start of your transformation.</p>
                <p>Together, we’ll unlock your full potential and create a strategy tailored to your unique goals with an investment in your confidence, presence, and the way you captivate the world.</p>
                `}
            className={"space-y-3 text-[#4B3E48] lg:space-y-5"}
          />

          <Image
            src={AboutImg}
            alt="about_img"
            className="my-6 -ml-[38%] block max-w-[19rem] md:-ml-[16%] lg:hidden"
          />
          <div className="lg:mt-10 2xl:mt-16">
            <h5 className="-rotate-6 font-anjelScript text-4xl font-medium text-[#4B3E48] lg:text-5xl extraLg:text-[3.5rem] 2xl:text-[5rem]">
              I can help!
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
