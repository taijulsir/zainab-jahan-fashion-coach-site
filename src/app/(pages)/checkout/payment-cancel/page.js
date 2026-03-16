// pages/payment-cancel.js

"use client";
import React from "react";
import ButtonWithBorder from "@/components/elements/ButtonWithBorder";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PaymentCancelImg from "@/assets/image/payment_cancel.gif";

function PaymentCancelPage() {
  const router = useRouter();
  return (
    <div className="flex h-[90dvh] w-screen items-center justify-center bg-[#F9F5EB] px-6">
      <div className="w-full max-w-[46rem] text-center">
        <div className="rounded-3xl bg-[#FFFFFF] px-4 py-7 lg:px-10 lg:py-14 extraLg:px-16 extraLg:py-20">
          <Image src={PaymentCancelImg} className="mx-auto w-[4.375rem] lg:w-[9rem]" />
          <h1 className="mt-4 font-felixTitlin text-2xl font-normal text-[#000000] lg:mt-6 lg:text-3xl extraLg:text-5xl">
            Payment Canceled
          </h1>
          <p className="mt-4 font-mada text-sm font-light text-[#4B3E48] lg:text-base extraLg:text-2xl">
            {`We're sorry, but your payment was not successful. If you encountered an issue, please try again or contact support.`}
          </p>
        </div>

        <div className="mx-auto mt-5 w-fit md:mt-7 lg:mt-12">
          <ButtonWithBorder
            label={"Go to Homepage"}
            buttonClassName={
              " min-w-[8.625rem] lg:min-w-[9.5rem] extraLg:min-w-[10rem] 2xl:min-w-[11.438rem]"
            }
            onClickHandle={() => router.push("/about")}
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentCancelPage;
