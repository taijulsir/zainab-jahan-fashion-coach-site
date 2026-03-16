const FelixTitlinMainTitle = ({ title, className }) => {
  return (
    <h5
      className={`font-felixTitlin text-2xl font-medium md:text-3xl lg:text-3xl extraLg:text-4xl 2xl:text-5xl ${className}`}
    >
      {title}
    </h5>
  );
};
export default FelixTitlinMainTitle;
