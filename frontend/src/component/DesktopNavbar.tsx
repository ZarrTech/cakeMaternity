import { subMenuList } from "./MobileNavbar";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FC, useState } from "react";
import { Search, Cart, Avatar } from "../component";
import clsx from "clsx";
import { easeInOut, motion } from "framer-motion";
const DesktopNavbar: FC = () => {
  const [submenuState, setSubmenuState] = useState<boolean[]>(new Array(subMenuList.length).fill(false));
console.log(submenuState);

  const toggleSubmenu = (index: number) => {
    const newStates = [...submenuState]
    newStates[index] = !newStates[index]
    newStates.map((states, idx) => {
      idx === index ? !states : false
    })
    setSubmenuState(newStates)
  }


  return (
    <section className=" w-full hidden lg:flex bg-black px-3 p-1 text-xl">
      <header className=" flex justify-between items-center w-full">
        <NavLink to="/home" className="mr-3 text-[1.7rem] font-bold">
          CM
        </NavLink>
        <nav className="relative flex justify-center  items-center">
          <div className=" text-xl flex items-center gap-10">
            {subMenuList.map((menu, i) => (
              <div key={i}>
                <NavLink to={`/${menu}`}>{menu}</NavLink>
              </div>
            ))}
          </div>
        </nav>
        <div className=" flex justify-center items-center">
          <span className=" mr-16">
            <Search />
          </span>
          <span>
            <Cart />
          </span>
          <span>
            <Avatar />
          </span>
        </div>
      </header>
    </section>
  );
};
export default DesktopNavbar;
