const AnjelScriptMainTitle = ({ title, className }) => {
  return (
    <h5
      className={`font-anjelScript text-2xl font-semibold md:text-3xl lg:text-3xl extraLg:text-4xl 2xl:text-5xl ${className}`}
    >
      {title}
    </h5>
  );
};
export default AnjelScriptMainTitle;
