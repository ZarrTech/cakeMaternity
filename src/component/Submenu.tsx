import { SubMenu } from "./MobileNavbar";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Dispatch, SetStateAction, FC, useState } from "react";
import { motion } from "framer-motion";

interface SubmenuProps {
  data: SubMenu;
  toggleDrawer?: boolean;
  setToggleDrawer?: Dispatch<SetStateAction<boolean>>;
}

const Submenu: FC<SubmenuProps> = ({ data, setToggleDrawer }) => {
  const { pathname } = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <>
      <li
        className={clsx(
          " list-none text-xl mt-3 capitalize  flex justify-between items-center",
          pathname.includes(data.name) && "text-blue-600"
        )}
        onClick={() => {
          setOpenSubMenu(!openSubMenu);
        }}
      >
        <p>{data.name}</p>
        <span className={clsx(openSubMenu && "rotate-180", 'duration-300')}>
          <IoMdArrowDropdown />
        </span>
      </li>
      <motion.ul
        animate={openSubMenu ? { height: "auto", } : { height: 0 ,}}
        className={clsx(" capitalize  overflow-hidden")}
      >
        {data.menus.map((menu) => (
          <li
            key={menu}
            onClick={() => {
              setToggleDrawer && setToggleDrawer(false);
            }}
          >
            <NavLink to={`/${menu}`} className={clsx("capitalize")}>
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};
export default Submenu;
