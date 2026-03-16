"use client";
import AppContext from "@/context/AppContext";
import { useFetch } from "@/hooks";
import { Env } from "@/utils";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useContext, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import BookPayment from "./BookPayment/BookPayment";
import ClientDetails from "./ClientDetails";
import Schedule from "./Schedule";
import SelectCoaching from "./SelectCoaching";
import { formatDateToLocalString } from "./utils/formatDateString";

const BookSession = ({}) => {
  const [activeTab, setActiveTab] = useState(1);
  const { showModalToggle, selectCoach, setSelectCoach, selectedSessionId, setselectedSessionId } =
    useContext(AppContext);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("22:00");
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [selectedScheduleFee, setSelectedScheduleFee] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, seEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleConfirm = async (e) => {
    // e.preventDefault();
    if (fullName === "" || email === "" || phoneNumber === "") {
      setIsError(true);
      return;
    }
    try {
      const sessionData = {
        name: fullName,
        phone: phoneNumber,
        email,
        total: selectedScheduleFee,
        sessionItems: [
          {
            name: selectCoach,
            sessionName: selectCoach,
            fee: selectedScheduleFee,
            sessionType: selectedSchedule,
          },
        ],
        orderEntity: "session_booking",
        schedule: formatDateToLocalString(`${date}T${time}`),
        successUrl: "checkout/payment-success",
        cancelUrl: "checkout/payment-cancel",
      };

      const res = await axios.post(
        `${Env.backend_url}api/cmsUserApp/public/paymentIntent/zainab`,
        sessionData,
      );

      const sessionID = res.data.id;

      const stripe = await loadStripe(Env.stripe_public_key);
      const result = stripe.redirectToCheckout({
        sessionId: sessionID,
      });
      setIsError(false);

      if (result.error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`relative mx-auto rounded-[16px] bg-[#F9F5EB] px-5 py-12 lg:px-20 2xl:px-28 ${activeTab === 4 ? "w-[90%] bg-white lg:min-w-[72rem]" : "w-[90%] bg-[#F9F5EB] lg:min-w-[47rem]"}`}
    >
      <RiCloseLargeFill
        className="absolute right-5 top-5 cursor-pointer text-base text-[#4B3E48] lg:right-10 lg:top-10 lg:text-2xl"
        onClick={() => {
          showModalToggle(), setSelectCoach("");
        }}
      />
      {
        <div>
          {activeTab === 1 && (
            <SelectCoaching
              selectCoach={selectCoach}
              setSelectCoach={setSelectCoach}
              setActiveTab={setActiveTab}
              setSelectedScheduleFee={setSelectedScheduleFee}
              selectedSessionId={selectedSessionId}
              setSelectedSessionId={setselectedSessionId}
            />
          )}
          {activeTab === 2 && (
            <Schedule
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              selectedSchedule={selectedSchedule}
              setSelectedSchedule={setSelectedSchedule}
              selectCoach={selectCoach}
              setActiveTab={setActiveTab}
              setSelectedScheduleFee={setSelectedScheduleFee}
            />
          )}
          {activeTab === 3 && (
            <ClientDetails
              setActiveTab={setActiveTab}
              fullName={fullName}
              setFullName={setFullName}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              email={email}
              seEmail={seEmail}
              date={date}
              time={time}
              selectCoach={selectCoach}
              handleConfirm={handleConfirm}
              isError={isError}
            />
          )}
          {activeTab === 4 && <BookPayment setActiveTab={setActiveTab} />}
        </div>
      }
    </div>
  );
};

export default BookSession;
