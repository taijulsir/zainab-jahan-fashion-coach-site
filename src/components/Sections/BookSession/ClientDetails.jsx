"use client";
import axios from "axios";
import SessionHeaderTitle from "./SessionHeaderTitle";
import SessionNextButton from "./SessionNextButton";
import { Env } from "@/utils";
import AppContext from "@/context/AppContext";
import { useContext } from "react";

const ClientDetails = ({
  setActiveTab,
  fullName,
  setFullName,
  phoneNumber,
  setPhoneNumber,
  email,
  seEmail,
  date,
  time,
  selectCoach,
  handleConfirm,
  isError,
}) => {
  // async function handleConfirm() {
  //   console.log('dukchi')
  //   try {
  //     const sessionData = {
  //       name: fullName,
  //       phone: phoneNumber,
  //       email,
  //       total: 100,
  //       sessionItems: [{ name: selectCoach, fee: 100 }],
  //       orderEntity: "booking-session",
  //       schedule: `${date}T${time}`,
  //       coachingType: selectCoach,
  //       successUrl: "checkout/payment-success",
  //       cancelUrl: "checkout/payment-cancel",
  //     };

  //     console.log( `${Env.base_url}api/cmsUserApp/public/paymentIntent/zainab`)

  //     // const res = await axios.post(
  //     //   `${Env.base_url}api/cmsUserApp/public/paymentIntent/zainab`,
  //     //   sessionData,
  //     // );

  //     // const sessionID = res.data.id;

  //     // const stripe = await loadStripe(Env.stripe_public_key);
  //     // const result = stripe.redirectToCheckout({
  //     //   sessionId: sessionID,
  //     // });

  //     // if (result.error) {
  //     //   console.error(error);
  //     // }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div>
      <SessionHeaderTitle text={"Client Details"} />
      <div className="mt-6 md:mt-8 lg:mt-[65px]">
        <div className="space-y-5 lg:space-y-6">
          <div className="relative">
            <label className="absolute -top-2 left-4 bg-[#F9F5EB] font-mada text-xs font-normal text-[#000000] md:text-sm lg:-top-3 lg:text-xl">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder=""
              className="w-full border border-[#000000] bg-transparent p-2 font-mada text-base font-normal text-[#000000] focus:outline-none focus:ring-0 focus:ring-gray-400 lg:p-3"
            />
            {isError && fullName === "" && (
              <p className="mt-1 text-start font-mada text-xs font-normal text-red-600 md:text-sm lg:text-lg">
                Please enter a valid name
              </p>
            )}
          </div>
          <div className="relative">
            <label className="absolute -top-2 left-4 bg-[#F9F5EB] font-mada text-xs font-normal text-[#000000] md:text-sm lg:-top-3 lg:text-xl">
              Phone Number
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder=""
              className="w-full border border-[#000000] bg-transparent p-2 font-mada text-base font-normal text-[#000000] focus:outline-none focus:ring-0 focus:ring-gray-400 lg:p-3"
            />
            {isError && phoneNumber === "" && (
              <p className="mt-1 text-start font-mada text-xs font-normal text-red-600 md:text-sm lg:text-lg">
                Please enter a valid phone number
              </p>
            )}
          </div>
          <div className="relative">
            <label className="absolute -top-2 left-4 bg-[#F9F5EB] font-mada text-xs font-normal text-[#000000] md:text-sm lg:-top-3 lg:text-xl">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => seEmail(e.target.value)}
              placeholder=""
              className="w-full border border-[#000000] bg-transparent p-2 font-mada text-base font-normal text-[#000000] focus:outline-none focus:ring-0 focus:ring-gray-400 lg:p-3"
            />
            {isError && email === "" && (
              <p className="mt-1 text-start font-mada text-xs font-normal text-red-600 md:text-sm lg:text-lg">
                Please enter a valid email
              </p>
            )}
          </div>
        </div>

        <div className="ml-auto mr-auto mt-12 max-w-[8.625rem] lg:mr-0 lg:mt-[65px] lg:max-w-[11.625rem]">
          <SessionNextButton className={""} onClick={() => handleConfirm()} />
        </div>
      </div>
    </div>
  );
};
export default ClientDetails;
