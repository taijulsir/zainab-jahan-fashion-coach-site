import FashionStyleImg from "@/assets/image/about/fashion_style.png";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import Image from "next/image";

const FashionStyle = () => {
  return (
    <div className="relative min-h-[26.25rem] w-full lg:min-h-full">
      <div className="h-[26.25rem] max-h-[63rem] min-h-[26.25rem] w-[75%] max-w-[65.5rem] lg:h-full lg:min-h-full lg:w-[65%]">
        <Image src={FashionStyleImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute -bottom-[13rem] right-6 my-auto h-fit w-[70%] bg-[#FFFFFF] lg:bottom-0 lg:top-0 lg:w-[48%]">
        <div className="relative p-5 lg:px-[2rem] lg:py-[3rem] extraLg:px-[3rem] extraLg:py-[6rem] 2xl:px-[4rem] 2xl:py-[10rem]">
          <FelixTitlinMainTitle
            title={"A Defining Moment"}
            className={"text-center !leading-tight text-[#4B3E48] lg:mt-8"}
          />
          <div className="mt-4 space-y-3 text-center font-mada text-xs font-light text-[#4B3E48] md:text-sm lg:mt-8 lg:space-y-4 lg:text-base extraLg:text-xl 2xl:text-2xl">
            <p>
              {`I moved to the USA in 2022 and began helping people as a hobby, offering advice on style and relationships. What started as something casual quickly became meaningful when a friend I introduced to someone ended up marrying the love of his life. That moment changed everything—it made me realize the power of connection and how fulfilling it is to help others find love and confidence.`}
            </p>
          </div>
          <div className="absolute -bottom-[50px] right-4 lg:-bottom-3 2xl:bottom-0">
            <h5 className="-rotate-12 font-anjelScript text-3xl font-normal text-[#4B3E48] lg:-rotate-[16deg] lg:text-[2rem] extraLg:-rotate-[20deg] extraLg:text-[3rem] 2xl:text-[4rem]">
              Fashion Coach
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionStyle;
