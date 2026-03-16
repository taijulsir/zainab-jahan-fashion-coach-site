import FashionStyle from "./FashionStyle";
import RelationshipAdvice from "./RelationshipAdvice";

const ReachOut = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9F5EB] from-[75%] to-transparent to-[75%] pb-40 pt-14 lg:pr-[6rem] extraLg:py-16 2xl:py-20 2xl:pr-[8rem]">
      <div className="ml-0 w-full lg:ml-auto lg:w-[95%] 2xl:w-[90%]">
        <FashionStyle />
        <RelationshipAdvice />
      </div>
    </div>
  );
};

export default ReachOut;
