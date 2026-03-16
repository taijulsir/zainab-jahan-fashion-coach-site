"use client";
import FooterBgImg from "@/assets/image/footer/footer_bg.png";
import FooterLgSing from "@/assets/image/footer/footer_lg_sing.png";
import FooterSmBgImg from "@/assets/image/footer/footer_sm_bg.png";
import FooterSmSing from "@/assets/image/footer/footer_sm_sing.png";
import Link from "next/link";
import { LuFacebook, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";
import BookSessionButton from "../BookSession/BookSessionButton";
import LogoImg from "@/assets/image/logo.png";
import Image from "next/image";
import { useContext } from "react";
import AppContext from "@/context/AppContext";
import { useFetch } from "@/hooks";
import { navLinks } from "@/constants/navLinks";

const Footer = ({}) => {
  const { showModal, showModalToggle } = useContext(AppContext);

  const { data } = useFetch("/social");

  return (
    <>
      <footer
        className="hidden w-full bg-gray-900 bg-center lg:block"
        style={{
          backgroundImage: `url(${FooterBgImg.src})`,
          backgroundOpacity: 0.5, // Note: This doesn't work; opacity needs to be handled differently
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Footer Content */}
        <div className="h-full w-full bg-[#3C3C3C99] py-[20px] pl-[20px] pr-[110px] lg:py-[3rem] lg:pl-[5rem] lg:pr-[6.5rem] extraLg:pl-[7.5rem] 2xl:py-[4.688rem] 2xl:pl-[9rem] 2xl:pr-[7.5rem]">
          <div className="h-[20rem] w-full extraLg:h-[24rem] 2xl:h-[28.5rem]">
            <div
              className="relative z-10 flex h-full w-full flex-col items-center justify-start text-white"
              style={{
                backgroundImage: `url(${FooterLgSing.src})`,
                backgroundOpacity: 0.5, // Note: This doesn't work; opacity needs to be handled differently
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Link
                href={"/"}
                className="absolute -left-10 top-6 bg-[#F9F5F6] lg:h-[5rem] lg:w-[6rem] extraLg:h-[7rem] extraLg:w-[8rem] extraLg:py-3 2xl:h-[8.75rem] 2xl:w-[10.188rem]"
              >
                <Image src={LogoImg} alt="" className="h-full w-full" />
              </Link>
              <div className="mx-auto mt-16 grid w-[65%] grid-cols-3 extraLg:mt-24 2xl:mt-28">
                <div className="flex flex-col gap-3 font-mada text-sm font-semibold uppercase text-white extraLg:text-base 2xl:gap-4 2xl:text-lg">
                  {navLinks?.map((singleNav, index) => (
                    <Link href={singleNav?.link} key={index}>
                      {singleNav?.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3 font-mada text-sm font-semibold uppercase text-white extraLg:text-base 2xl:gap-4 2xl:text-lg">
                  {/* <Link href={"#"} className="flex items-center justify-start gap-4">
                    <LuFacebook className="text-sm" />
                    Facebook
                  </Link>
                  <Link href={"#"} className="flex items-center justify-start gap-4">
                    <LuInstagram className="text-sm" />
                    Instagram
                  </Link>
                  <Link href={"#"} className="flex items-center justify-start gap-4">
                    <LuLinkedin className="text-sm" />
                    linkedin
                  </Link>
                  <Link href={"#"} className="flex items-center justify-start gap-4">
                    <LuYoutube className="text-sm" />
                    youtube
                  </Link> */}
                  {data?.data?.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={item?.link}
                        className="flex items-center justify-start gap-4"
                      >
                        {item?.name?.toLowerCase() === "facebook" && (
                          <LuFacebook className="text-sm" />
                        )}
                        {item?.name?.toLowerCase() === "instagram" && (
                          <LuInstagram className="text-sm" />
                        )}
                        {item?.name?.toLowerCase() === "linkedin" && (
                          <LuLinkedin className="text-sm" />
                        )}
                        {item?.name?.toLowerCase() === "youtube" && (
                          <LuYoutube className="text-sm" />
                        )}
                        {item?.name}
                      </Link>
                    );
                  })}
                </div>
                <div>
                  <h5 className="font-mada text-sm font-semibold uppercase text-white extraLg:text-base 2xl:text-lg">
                    Subscribe
                  </h5>
                  <div className="mt-4 max-w-[11rem] extraLg:mt-5 extraLg:max-w-[13rem] 2xl:mt-7 2xl:max-w-[16.875rem]">
                    <BookSessionButton isNavbar={false} showModalToggle={showModalToggle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        className="block w-full bg-gray-900 bg-center lg:hidden"
        style={{
          backgroundImage: `url(${FooterSmBgImg.src})`,
          backgroundOpacity: 0.5, // Note: This doesn't work; opacity needs to be handled differently
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Footer Content */}
        <div className="h-full w-full bg-[#3C3C3C99] py-8 pl-6 pr-4">
          <div className="h-full w-full">
            <div
              className="relative z-10 flex h-full w-full flex-col items-center justify-start text-white"
              style={{
                backgroundImage: `url(${FooterSmSing.src})`,
                backgroundOpacity: 0.5, // Note: This doesn't work; opacity needs to be handled differently
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Link href={"/"} className="absolute -left-4 top-12 h-[5rem] w-[6rem] bg-[#F9F5F6]">
                <Image src={LogoImg} alt="" className="h-full w-full" />
              </Link>
              <div className="ml-auto grid w-[60%] grid-cols-2 py-14">
                <div className="flex flex-col gap-2 font-mada text-sm font-semibold uppercase text-white md:gap-3 md:text-base">
                  <Link href={"/about"}>About</Link>
                  <Link href={"#"}>Service</Link>
                  <Link href={"#"}>Podcast</Link>
                  <Link href={"#"}>Contact</Link>
                </div>
                <div className="flex flex-col gap-2 font-mada text-sm font-semibold uppercase text-white md:gap-3 md:text-base">
                  {/* <Link href={"#"} className="flex items-center justify-start gap-2 md:gap-3">
                    <LuFacebook className="text-[10px] md:text-xs" />
                    Facebook
                  </Link>
                  <Link href={"#"} className="flex items-center justify-start gap-2 md:gap-3">
                    <LuInstagram className="text-[10px] md:text-xs" />
                    Instagram
                  </Link>
                  <Link href={"#"} className="flex items-center justify-start gap-2 md:gap-3">
                    <LuLinkedin className="text-[10px] md:text-xs" />
                    linkedin
                  </Link>
                  <Link href={"#"} className="flex items-center justify-start gap-2 md:gap-3">
                    <LuYoutube className="text-[10px] md:text-xs" />
                    youtube
                  </Link> */}
                  {data?.data?.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={item?.link}
                        className="flex items-center justify-start gap-2 md:gap-3"
                      >
                        {item?.name === "facebook" && (
                          <LuFacebook className="text-[10px] md:text-xs" />
                        )}
                        {item?.name === "instagram" && (
                          <LuInstagram className="text-[10px] md:text-xs" />
                        )}
                        {item?.name === "linkedin" && (
                          <LuLinkedin className="text-[10px] md:text-xs" />
                        )}
                        {item?.name === "youtube" && (
                          <LuYoutube className="text-[10px] md:text-xs" />
                        )}
                        {item?.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="col-span-2 mt-10">
                  <h5 className="font-mada text-base font-semibold uppercase text-white">
                    Subscribe
                  </h5>
                  <div className="mt-2 max-w-[12rem]">
                    <BookSessionButton isNavbar={false} showModalToggle={showModalToggle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
