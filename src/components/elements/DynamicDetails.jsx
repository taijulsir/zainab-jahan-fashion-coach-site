const DynamicDetails = ({ details, className }) => {
  return (
    <div
      className={`font-mada text-sm font-light md:text-base lg:text-base extraLg:text-xl 2xl:text-2xl ${className}`}
      dangerouslySetInnerHTML={{ __html: details }}
    />
  );
};

export default DynamicDetails;
