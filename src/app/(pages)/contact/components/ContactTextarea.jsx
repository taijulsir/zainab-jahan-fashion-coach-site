const ContactTextarea = ({ value, setValue, label, type }) => {
  return (
    <div className="relative">
      <label className="absolute -top-2 left-4 bg-[#F9F5EB] font-felixTitlin text-xs font-normal uppercase text-[#000000] md:text-sm lg:-top-3 lg:text-base extraLg:text-lg 2xl:text-xl">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=""
        className="h-[4.563rem] w-full border border-[#000000] bg-transparent p-2 font-mada text-sm font-normal text-[#000000] focus:outline-none focus:ring-0 focus:ring-gray-400 md:h-[6rem] lg:h-[8.438rem] lg:p-3 lg:text-base extraLg:text-lg 2xl:text-xl"
      />
    </div>
  );
};

export default ContactTextarea;
