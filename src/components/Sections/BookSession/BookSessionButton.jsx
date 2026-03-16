const BookSessionButton = ({ isNavbar, showModalToggle, className }) => {
  return (
    <>
      <div
        className={`flex items-center justify-center border p-1 extraLg:p-2 ${className} ${isNavbar ? "absolute -left-[15%] m-auto h-[41px] w-[142px] rotate-90 border-[#4B3E48] lg:-left-[20%] lg:h-[40px] lg:w-[130px] extraLg:-left-[40%] extraLg:h-[55px] extraLg:w-[150px] 2xl:h-[60px] 2xl:w-[186px]" : "w-full border-[#ffffff]"}`}
        onClick={showModalToggle}
      >
        <button
          className={`group relative isolation-auto z-10 mx-auto flex w-full items-center justify-center gap-2 overflow-hidden px-4 py-1 text-sm before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:transition-all before:duration-700 before:[background-image:linear-gradient(360deg,#A3938C,#D9CEC5,#F5EDE2,#C9BEB5,#9A8D87)] hover:text-[#4B3E48] before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 md:text-base lg:px-2 lg:text-sm lg:font-semibold extraLg:py-2 extraLg:text-base 2xl:px-4 2xl:text-lg ${isNavbar ? "bg-[#4B3E48] backdrop-blur-md" : "border border-[#ffffff] bg-transparent"}`}
        >
          Book a session
        </button>
      </div>
    </>
  );
};

export default BookSessionButton;
