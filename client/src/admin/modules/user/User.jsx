import Single from "../chart/Single";
import { singleUser } from "../../../data";

const User = () => {
  return (
    <div>
      <Single {...singleUser}></Single>{" "}
    </div>
  );
};

export default User;
