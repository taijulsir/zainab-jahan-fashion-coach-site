import Image from "next/image";
import ContactImg from "@/assets/image/contact_img.png";

const ContactImage = () => {
  return (
    <div className="relative mt-0 h-full max-h-[44rem] w-full max-w-[40rem] 2xl:mt-6">
      <div className="absolute -right-2 -top-2 z-0 h-[10rem] w-[10rem] border border-[#2E272D] lg:-right-[5%] lg:-top-[3%] lg:h-[80%] lg:w-[80%]"></div>
      <Image src={ContactImg} alt="" className="absolute z-20 h-full w-full" />
    </div>
  );
};
export default ContactImage;
