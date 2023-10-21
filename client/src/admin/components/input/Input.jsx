import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={type}
        {...field}
        {...props}
        className={`w-full max-md:px-4 max-md:py-2 ${
          hasIcon ? "p-5 pr-[60px] " : "p-4"
        } rounded-lg font-semibold transition duration-200 ease-in-out border focus:bg-white  focus:text-black`}
      />
      {children ? (
        <div className="absolute right-[20px] top-1/2 translate-y-1/2 cursor-pointer">
          {children}
        </div>
      ) : null}
    </div>
  );
};
Input.prototypes = {
  name: PropTypes.string.isRequired,
  hasIcon: PropTypes.bool,
  children: PropTypes.any,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default Input;
