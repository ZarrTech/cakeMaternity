import Avatar from "./Avatar";
import Cart from "./CartIcon";

const RightNav = () => {
  return (
    <div className=" flex justify-center items-center gap-2">
      <span>
        <Cart />
      </span>
      <span>
        <Avatar />
      </span>
    </div>
  );
};
export default RightNav;
