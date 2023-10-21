// eslint-disable-next-line react/prop-types
const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <div
      className="mb-2 sm:mb-4 text-[clamp(1rem,0.9084249084249084rem_+_0.3663003663003663vw,1.25rem)] font-semibold cursor-pointer text-gray-50"
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </div>
  );
};

export default Label;
