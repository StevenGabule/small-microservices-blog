import PostCreate from "./PostCreate";
import PostLists from "./PostLists";

export default () => {
  return (
    <div>
      <h1 className="text-center">Blog App</h1>
      <PostCreate />
      <PostLists />
    </div>
  );
};