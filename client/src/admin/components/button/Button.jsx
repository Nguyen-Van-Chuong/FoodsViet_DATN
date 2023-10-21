import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * @param {*} onClick Handler click
 * @requires
 * @param {string} type Type of button 'button' | 'submit'
 * @returns
 */
const Button = ({
  type = "button",
  onClick = () => {},
  kind = "primary",
  children,
  ...props
}) => {
  const { isLoading, to } = props;

  const buttonClasses = `cursor-pointer px-4 py-2 flex justify-center items-center rounded-lg font-semibold text-white ${
    kind === "secondary"
      ? "bg-white text-primary"
      : kind === "primary"
      ? "bg-primary"
      : "text-primary bg-opacity-10 bg-primary"
  }
${isLoading ? "opacity-50 pointer-events-none" : ""} ${
    props.height ? `h-${props.height}` : "h-16"
  }
  `;

  const child = isLoading ? (
    <div
      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  ) : (
    children
  );

  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to} className="inline-block">
        <button
          type={type}
          className={`${buttonClasses} ${props.className}`}
          onClick={onClick}
        >
          {child}
        </button>
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      className={`${buttonClasses} ${props.className}`}
      onClick={onClick}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
  children: PropTypes.node,
  kind: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
