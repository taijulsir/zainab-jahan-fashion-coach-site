const SessionNextButton = ({ className, onClick }) => {
  return (
    <div
      className={`m-auto flex w-full items-center justify-center border border-[#4B3E48] p-1 lg:p-2 ${className}`}
      onClick={onClick}
    >
      <button
        className={`group relative isolation-auto z-10 mx-auto flex w-full items-center justify-center gap-2 overflow-hidden bg-[#4B3E48] px-4 py-1 text-sm backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:transition-all before:duration-700 before:[background-image:linear-gradient(360deg,#A3938C,#D9CEC5,#F5EDE2,#C9BEB5,#9A8D87)] hover:text-[#4B3E48] before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 md:text-base lg:py-2 lg:text-lg lg:font-semibold`}
      >
        Next
      </button>
    </div>
  );
};

export default SessionNextButton;
