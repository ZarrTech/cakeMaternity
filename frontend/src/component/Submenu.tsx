
import { NavLink,  } from "react-router-dom";
import clsx from "clsx";
import {FC } from "react";


interface SubmenuProps {
  data: String;
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Submenu: FC<SubmenuProps> = ({ data, setToggleDrawer }) => {
  

  return (
    <>
      <li
        className={clsx(
          " list-none text-xl mt-3 capitalize  flex flex-col items-center"
        )}
      >
        <NavLink to={`/${data}`} className={clsx("capitalize")}onClick={()=>setToggleDrawer(false)}>
          {data}
        </NavLink>
      </li>
    </>
  );
};
export default Submenu;
