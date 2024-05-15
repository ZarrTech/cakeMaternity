import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { useState, FC } from "react";
import clsx from "clsx";
import Submenu from "./Submenu";
import { Avatar, Cart, Search } from "../component";
import { IoIosSearch } from "react-icons/io";

export interface SubMenu {
  name: string;
  menus: string[];
 
}

//submenu data
export const subMenuList: SubMenu[] = [
  {
    name: "layered-cakes",
    menus: [
      "single-layered-cakes",
      "double-layered-cakes",
      "three-layered-cakes",
      "four-layered-cakes",
    ],
  },
  {
    name: "special-cakes",
    menus: [
      "ice-cream-cakes",
      "children-cakes",
      "dessert-cakes",
      "square-cakes",
      "football-cakes",
    ],
   
  },
  {
    name: "step-cakes",
    menus: [
      "single-step-cakes",
      "two-step-cakes",
      "three-step-cakes",
      "four-step-cakes",
    ],
  },
  {
    name: "wedding",
    menus: ["reception-wedding-cakes", "traditional-wedding-cakes"],
  },
];

const MobileNavbar: FC = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [showSearch, setShowSearch] = useState(false)
  
  return (
    <div className=" relative navbar  lg:hidden  flex w-full p-1 bg-black">
      {/* hamburger */}
      <button
        className="btn btn-ghost"
        onClick={() => {
          setToggleDrawer(true);
        }}
      >
        <HiOutlineBars3BottomLeft size={25} />
      </button>

      {/* drawer menu */}
      <div
        className={clsx(
          " fixed  w-screen h-full top-0 left-0 bg-black/10 backdrop-blur-sm  -translate-x-full transition-all duration-300  ease-out z-50",
          toggleDrawer && "translate-x-0"
        )}
      >
        <section className=" flex flex-col gap-8 absolute bg-white top-0 left-0 w-[250px] h-screen z-50">
          <button
            className="btn bg-transparent btn-ghost p-1 rounded-full border-slate-200 absolute top-3 right-5 "
            onClick={() => {
              setToggleDrawer(false);
            }}
          >
            <RiCloseCircleLine size={25} />
          </button>
          {/* drawer content */}
          <div className=" mt-[5rem] px-4">
            {subMenuList?.map((menu) => (
              <div key={menu.name}>
                <Submenu data={menu} setToggleDrawer={setToggleDrawer} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-[1.7rem] font-bold" href="/home">CM</a>
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
