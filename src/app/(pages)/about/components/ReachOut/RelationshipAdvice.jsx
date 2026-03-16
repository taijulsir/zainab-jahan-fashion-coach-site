import RelationshipAdviceImg from "@/assets/image/about/relationship_advice.jpeg";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import Image from "next/image";

const RelationshipAdvice = () => {
  return (
    <div className="relative mb-[10rem] mt-[19rem] min-h-[26.25rem] w-full lg:mb-10 lg:mt-[11rem] lg:min-h-full">
      <div className="ml-auto h-[26.25rem] max-h-[63rem] min-h-[26.25rem] w-[80%] max-w-[65.5rem] lg:h-full lg:min-h-full">
        <Image
          src={RelationshipAdviceImg}
          alt=""
          className="h-full max-h-[63rem] w-full max-w-[65.5rem] object-cover extraLg:object-contain"
        />
      </div>
      <div className="absolute -bottom-[14rem] left-4 my-auto h-fit w-[72%] bg-custom-gradient lg:bottom-0 lg:left-0 lg:top-0 lg:w-[48%]">
        <div className="relative p-5 lg:px-[2rem] lg:py-[3rem] extraLg:px-[3rem] extraLg:py-[6rem] 2xl:px-[4rem] 2xl:py-[6rem]">
          <FelixTitlinMainTitle
            title={"The Magic of Authentic Self-Love"}
            className={"text-center !leading-tight text-[#4B3E48] lg:mt-8"}
          />
          <div className="mt-4 space-y-3 text-center font-mada text-xs font-light text-[#4B3E48] md:text-sm lg:mt-8 lg:space-y-4 lg:text-base extraLg:text-xl 2xl:text-2xl">
            <p>
              {`And now, I can proudly say that I truly love and enjoy the concept of self-love—because it’s so much more than just a buzzword. To me, self-love is about embracing who you are, owning your story, and expressing it through your own personalized look. It’s about dressing in a way that reflects your unique personality and makes you feel confident enough to shine, even in a crowd.`}
            </p>
            <p>
              {`There’s something powerful about standing in your truth and showing up fully as yourself. That energy becomes magnetic. When you’re aligned with who you are, you not only feel better—you attract better. It’s not about changing who you are to fit into someone else’s ideal—it’s about becoming more of who you already are. I believe that when you love yourself fully, inside and out, the right people naturally find their way to you. And being part of someone’s journey to confidence, clarity, and real connection is one of the greatest joys of what I do.`}
            </p>
          </div>
          <div className="absolute -bottom-[50px] left-4 lg:-bottom-3 2xl:bottom-0">
            <h5 className="-rotate-12 font-anjelScript text-3xl font-normal text-[#4B3E48] lg:-rotate-[16deg] lg:text-[2rem] extraLg:-rotate-[18deg] extraLg:text-[3rem] 2xl:text-[4rem]">
              Relationship Coach
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipAdvice;
