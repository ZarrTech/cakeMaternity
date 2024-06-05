import { Outlet} from "react-router-dom";
import Navbar from "../component/Navbar";
import { Footer } from "../component";

const RootLayout = () => {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
      
            <Outlet />
          
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default RootLayout;
