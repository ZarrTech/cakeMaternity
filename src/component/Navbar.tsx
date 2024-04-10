import {  Outlet } from "react-router-dom";
import { MobileNavbar, DesktopNavbar } from ".";

const Navbar = () => {
  return (
    <>
      <header className=" w-full">
        <nav className=" w-full flex items-center">
          {/* Mobile Navbar */}
          <MobileNavbar />
          
          {/* Desktop Navbar */}
          <DesktopNavbar/>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Navbar;
