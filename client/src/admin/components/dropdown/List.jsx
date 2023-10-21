import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute left-0 w-full overflow-hidden rounded-b-lg shadow-sm top-full z-1 bg-soft-bg">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
