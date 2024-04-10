import { SubMenu } from "./MobileNavbar"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

interface SubmenuProps{
    data: SubMenu
}

const Submenu: React.FC<SubmenuProps> = ({ data }) => {
    
    const {pathname} = useLocation()
    return (
        <>
            <li className={clsx(" list-none text-xl mt-3 capitalize  flex justify-between items-center", pathname.includes(data.name) && "text-blue-600")}>
                <p>{data.name}</p>
                <span><IoMdArrowDropdown/></span>
            </li>
            <ul className=" capitalize">
                {data.menus.map((menu) => (
                    <li key={menu}>
                        <NavLink to={`/${data.name}/${menu}`} className='capitalize'>{menu}</NavLink>
                   </li>
                ))}
            </ul>
        </>
    );
}
export default Submenu