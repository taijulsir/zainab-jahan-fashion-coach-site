import { useState } from "react";
import SessionHeaderTitle from "../SessionHeaderTitle";
import PaymentCheckbox from "./PaymentCheckbox";
import PaymentImg1 from "@/assets/image/payment.png";
import { BsInfoCircleFill } from "react-icons/bs";
import ButtonWithBorder from "@/components/elements/ButtonWithBorder";

const BookPayment = () => {
  const [checked, setChecked] = useState(true);
  const [fullName, setFullName] = useState("");

  return (
    <div>
      <SessionHeaderTitle text={"Payment"} />
      <div className="mt-6 md:mt-8 lg:mt-[65px]">
        <div>
          <PaymentCheckbox checked={checked} setChecked={setChecked} PaymentImg={PaymentImg1} />
        </div>
        <div>
          <div className="grid grid-cols-1 gap-4 py-6 lg:my-8 lg:grid-cols-2">
            <div className="grid grid-cols-1 items-center justify-start gap-2 lg:grid-cols-[26%_72%] lg:justify-end">
              <div>
                <p className="text-start font-mada text-xs font-normal text-[#4B3E48] md:text-sm lg:text-end lg:text-lg">
                  Card number <span className="text-[#C6305F]">*</span> :
                </p>
              </div>
              <div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder=""
                  className="w-full border border-[#4B3E48] bg-transparent p-2 text-xs font-normal text-[#4B3E48] focus:outline-none focus:ring-0 focus:ring-gray-400 md:text-sm lg:text-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 items-center justify-end gap-2 lg:grid-cols-[26%_72%]">
              <div>
                <p className="text-start font-mada text-xs font-normal text-[#4B3E48] md:text-sm lg:text-end lg:text-lg">
                  Card holder <span className="text-[#C6305F]">*</span> :
                </p>
              </div>
              <div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder=""
                  className="w-full border border-[#4B3E48] bg-transparent p-2 text-xs font-normal text-[#4B3E48] focus:outline-none focus:ring-0 focus:ring-gray-400 md:text-sm lg:text-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 items-center justify-end gap-2 lg:grid-cols-[26%_72%]">
              <div>
                <p className="text-start font-mada text-xs font-normal text-[#4B3E48] md:text-sm lg:text-end lg:text-lg">
                  Expiry date <span className="text-[#C6305F]">*</span> :
                </p>
              </div>
              <div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder=""
                  className="w-full border border-[#4B3E48] bg-transparent p-2 text-xs font-normal text-[#4B3E48] focus:outline-none focus:ring-0 focus:ring-gray-400 md:text-sm lg:text-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 items-center justify-end gap-2 lg:grid-cols-[26%_72%]">
              <div>
                <p className="text-start font-mada text-xs font-normal text-[#4B3E48] md:text-sm lg:text-end lg:text-lg">
                  CVC :
                </p>
              </div>
              <div className="relative flex items-center justify-center gap-2 lg:static">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder=""
                  className="w-full border border-[#4B3E48] bg-transparent p-2 text-xs font-normal text-[#4B3E48] focus:outline-none focus:ring-0 focus:ring-gray-400 md:text-sm lg:text-lg"
                />
                <abbr
                  title="World Health Organization"
                  className="absolute -top-6 right-0 lg:static"
                >
                  <BsInfoCircleFill className="text-base text-[#4B3E48] lg:text-lg" />
                </abbr>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F5EB] px-3 py-4 md:px-4 md:py-5 lg:px-12 lg:py-8">
            <div className="flex items-center justify-between font-mada text-xs font-normal text-[#4B3E48] md:text-sm lg:text-2xl">
              <p>Subtotal (1 program)</p>
              <p>$60.80</p>
            </div>
            <div className="mt-4 flex items-center justify-between font-mada text-xs font-semibold text-[#4B3E48] md:text-sm lg:text-2xl lg:font-medium">
              <p>Total amount</p>
              <p>$60.80</p>
            </div>
          </div>

          <div className="mx-auto mt-10 flex items-center justify-center text-center">
            <ButtonWithBorder
              label={"Pay"}
              buttonClassName={" min-w-[8.625rem] lg:min-w-[11.625rem] "}
              type="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPayment;
