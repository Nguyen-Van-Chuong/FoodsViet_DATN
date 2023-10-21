import Single from "../chart/Single";
import { singleProduct } from "../../../data";

const Post = () => {
  return (
    <div>
      <Single {...singleProduct}></Single>
    </div>
  );
};

export default Post;
