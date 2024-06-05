import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useState, FC } from "react";
import clsx from "clsx";
import Submenu from "./Submenu";
import { Avatar, Cart, Search } from "../component";
import { IoIosSearch } from "react-icons/io";



//submenu data
export const subMenuList:String[] = ['budget', 'children', 'dessert', 'wedding', 'store'];

const MobileNavbar: FC = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [showSearch, setShowSearch] = useState(false)
  
  return (
    <div className=" relative navbar  lg:hidden  flex w-full p-1 bg-black">
      {/* hamburger */}
      <button
        className="btn btn-ghost"
        onClick={() => {
          setToggleDrawer(!toggleDrawer);
        }}
      >
        <HiOutlineBars3BottomLeft size={25} />
      </button>

      {/* drawer menu */}
      <div
        className={clsx(
          " absolute flex flex-col top-[4.5rem] left-0 bg-black/10  -translate-x-full transition-all duration-300 py-3 px-[3rem]  ease-out z-50 text-pastel font-bold",
          toggleDrawer && "translate-x-0"
        )}
      >
          {/* drawer content */}
            {subMenuList?.map((menu, id) => (
              <div key={id}>
                <Submenu data={menu} setToggleDrawer={setToggleDrawer}  />
              </div>
            ))}
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-[1.7rem] font-bold" href="/">CM</a>
      </div>

      <div className=" flex justify-center items-center gap-2">
        <button
          className=" rightNav"
          onClick={() => setShowSearch(!showSearch)}
        >
          <IoIosSearch />
        </button>
        {showSearch && (
          <div>
            <Search />
          </div>
        )}
        <span>
          <Cart />
        </span>
        <span>
          <Avatar />
        </span>
      </div>
    </div>
  );
};
export default MobileNavbar;
