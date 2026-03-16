const ContactInput = ({ value, setValue, label, type }) => {
  return (
    <div className="relative">
      <label className="absolute -top-2 left-4 bg-[#F9F5EB] font-felixTitlin text-xs font-normal uppercase text-[#000000] md:text-sm lg:-top-3 lg:text-base extraLg:text-lg 2xl:text-xl">
        {label}
      </label>
      <input
        type={`${type}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=""
        className="w-full border border-[#000000] bg-transparent p-2 font-mada text-base font-normal text-[#000000] focus:outline-none focus:ring-0 focus:ring-gray-400 lg:p-3"
      />
    </div>
  );
};

export default ContactInput;
