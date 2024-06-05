import { MobileNavbar, DesktopNavbar } from ".";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className=" w-full">
        <nav className=" w-full flex items-center">
          {/* Mobile Navbar */}
          <MobileNavbar />

          {/* Desktop Navbar */}
          <DesktopNavbar />
          <main>
            <Outlet />
          </main>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
