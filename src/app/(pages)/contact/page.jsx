import AnjelScriptMainTitle from "@/components/elements/AnjelScriptMainTitle";
import DynamicDetails from "@/components/elements/DynamicDetails";
import FelixTitlinMainTitle from "@/components/elements/FelixTitlinMainTitle";
import ContactForm from "./components/ContactForm";
import ContactImage from "./components/ContactImage";

const Page = () => {
  return (
    <div className="bg-[#F9F5EB] px-10 pb-8 pt-16 lg:pb-9 lg:pr-[6rem] lg:pt-[5rem] extraLg:pb-12 2xl:px-[9rem] 2xl:pb-14 2xl:pt-[7.625rem]">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] lg:gap-6 2xl:gap-20">
        <div>
          <AnjelScriptMainTitle
            title={"Let’s Connect"}
            className={"text-center text-[#000000] lg:text-start"}
          />
          <FelixTitlinMainTitle
            title={"Contact"}
            className={
              "mt-3 text-center text-[#000000] lg:mt-3 lg:text-start extraLg:mt-4 2xl:mt-5"
            }
          />
          <DynamicDetails
            details={`<p>Whether you're seeking style advice, want to collaborate, or just looking for a spark — I'm  here to listen. Drop me a message and let’s make something beautiful together.</p>`}
            className={"mt-3 text-[#4B3E48] lg:mt-3 extraLg:mt-4 2xl:mt-5"}
          />
          <div className="mx-auto mt-5 block h-[15rem] w-[13.75rem] lg:hidden">
            <ContactImage />
          </div>
          <ContactForm />
        </div>
        <div className="hidden lg:block">
          <ContactImage />
        </div>
      </div>
    </div>
  );
};

export default Page;
