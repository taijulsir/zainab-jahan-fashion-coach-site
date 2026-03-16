import Image from "next/image";

const PaymentCheckbox = ({ className, checked, setChecked, PaymentImg }) => {
  return (
    <label
      className={`relative flex cursor-pointer touch-manipulation select-none items-center justify-start gap-3 ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <div
        className={`relative h-4 w-4 rounded-[8px] transition-transform duration-200 ease-in-out lg:h-6 lg:w-6 ${checked ? "animate-bounce" : ""}`}
      >
        <div
          className={`absolute inset-0 rounded-full border-2 transition-all duration-200 ease-in-out ${checked ? "border-[#4B3E48] bg-[#4B3E48]" : "border-[#4B3E48] bg-white"}`}
        />
        <svg
          fill="none"
          viewBox="0 0 24 24"
          className={`absolute inset-0 m-auto h-[70%] w-[70%] transform text-white transition-transform duration-200 ease-in-out ${checked ? "scale-100" : "scale-0"}`}
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
            stroke="currentColor"
            d="M4 12L10 18L20 6"
            className={`stroke-current transition-[stroke-dashoffset] delay-100 duration-300 ease-in-out ${checked ? "stroke-dashoffset-0" : "stroke-dashoffset-[40px]"} [stroke-dasharray:40]`}
          />
        </svg>
      </div>
      <Image src={PaymentImg} alt="payment" className="w-[6.5rem]" />
    </label>
  );
};

export default PaymentCheckbox;
