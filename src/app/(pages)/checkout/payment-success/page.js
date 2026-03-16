// pages/payment-success.js
"use client";
import React from "react";
import successfulImg from "@/assets/image/successful.gif";
import Image from "next/image";
import ButtonWithBorder from "@/components/elements/ButtonWithBorder";
import { useRouter } from "next/navigation";

function PaymentSuccessPage() {
  const router = useRouter();
  return (
    <div className="flex h-[90dvh] w-screen items-center justify-center bg-[#F9F5EB] px-6">
      <div className="w-full max-w-[46rem] text-center">
        <div className="rounded-3xl bg-[#FFFFFF] px-4 py-7 lg:px-10 lg:py-14 extraLg:px-16 extraLg:py-20">
          <Image src={successfulImg} className="mx-auto w-[4.375rem] lg:w-[9rem]" />
          <h1 className="mt-4 font-felixTitlin text-2xl font-normal text-[#000000] lg:mt-6 lg:text-3xl extraLg:text-5xl">
            Payment Successful
          </h1>
          <p className="mt-4 font-mada text-sm font-light text-[#4B3E48] lg:text-base extraLg:text-2xl">
            Thank you for your payment! Your session is confirmed. Checck your email for the payment
            information.
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

export default PaymentSuccessPage;
