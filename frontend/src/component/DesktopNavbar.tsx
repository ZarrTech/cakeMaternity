import { subMenuList } from "./MobileNavbar";
import { NavLink } from "react-router-dom";
import { FC} from "react";
import { Search, CartIcon, Avatar, Logo } from "../component";
const DesktopNavbar: FC = () => {
  
  return (
    <section className=" w-full hidden lg:flex bg-black px-3 p-1 text-xl">
      <header className=" flex justify-between items-center w-full">
        <Logo />
        <nav className="relative flex justify-center  items-center">
          <div className=" text-xl flex items-center gap-10">
            {subMenuList.map((menu, i) => (
              <div key={i}>
                <NavLink
                  to={menu === "store" ? `/${menu}` : `/products/${menu}`}
                >
                  {menu}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
        <div className=" flex justify-center items-center">
          <span className=" mr-16">
            <Search />
          </span>
          <span>
            <CartIcon />
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
