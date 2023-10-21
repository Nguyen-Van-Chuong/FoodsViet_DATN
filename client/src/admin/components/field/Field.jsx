import PropTypes from "prop-types";

const Field = ({ children, className }) => {
  return (
    <div
      className={"flex flex-col items-start last:mb-0 max-sm:pl-2 " + className}
    >
      {children}
    </div>
  );
};
Field.prototypes = {
  children: PropTypes.node,
};

export default Field;
