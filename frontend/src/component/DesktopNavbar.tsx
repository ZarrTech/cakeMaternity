import { SubMenu, subMenuList } from "./MobileNavbar";
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
          {subMenuList.map((menu, i) => {
            const { name, menus } = menu;

            return (
              <div key={i} className=" text-xl relative flex items-center">
                <button
                  className="flex items-center ml-4"
                  onClick={() => toggleSubmenu(i)}
                >
                  <p>{name}</p>
                  <span
                    className={clsx(
                      !submenuState[i] && "rotate-180",
                      "duration-500"
                    )}
                  >
                    <IoMdArrowDropdown />
                  </span>
                </button>

                <motion.ul
                  animate={{ height: submenuState[i] ? "fit-content" : 0 }}
                  transition={{ duration: 0.5, ease: easeInOut }}
                  className={clsx(
                    "text-[1.1rem] absolute top-14 capitalize mr-3 p-1 overflow-hidden bg-black",
                    !submenuState[i] && "hidden"
                  )}
                >
                  {menus.map((list, i) => (
                    <li
                      key={i}
                      className=" list-none flex items-start content-center justify-between mb-2 w-[17rem]  duration-500 "
                    >
                      <NavLink
                        to={`/${list}`}
                        className=" border-b border-white/20"
                      >
                        {list}
                      </NavLink>
                      <span className=" -rotate-90 ">
                        <IoMdArrowDropdown />
                      </span>
                    </li>
                  ))}
                </motion.ul>
              </div>
            );
          })}
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
