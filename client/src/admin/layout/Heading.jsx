const Heading = ({ className = "", children }) => {
  return (
    <h2
      className={`text-tertiary text-2xl relative mb-10 font-semibold font-montserrat ${className}`}
    >
      {children}
      <div className="before:h-4 before:w-50 before:bg-accent before:absolute before:top-0 before:left-0 before:-translate-y-6"></div>
    </h2>
  );
};

export default Heading;
