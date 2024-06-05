import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";import { NavLink } from "react-router-dom";
;

const Footer = () => {
    return (
      <section className=" pt-10 ">
        <div className=" flex flex-col md:flex-row md:justify-between bg-orange/10 p-4 gap-y-6 gap-x-24 ">
          <div className=" flex ">
            <div className=" flex flex-col gap-y-3 capitalize font-medium text-orange flex-1">
              <h1 className=" uppercase font-medium text-orange ">
                free fireworks!
              </h1>
              <p className=" text-black/70 text-[0.9rem] w-[60%]">
                All our cakes are delivered with free fireworks to make your
                celebration memorable
              </p>
            </div>
            <div className="">
              <div className=" flex flex-col gap-y-1 flex-1">
                <h1 className=" uppercase font-medium text-orange text-[0.8rem]">
                  we are social
                </h1>
                <div className=" flex text-3xl text-orange">
                  <FaInstagram />
                  <CiFacebook />
                  <FiTwitter />
                  <CiLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex gap-x-4">
            <div className=" flex-1 flex flex-col  gap-y-3 capitalize font-medium text-orange">
              <h1 className=" uppercase">our locations</h1>
              <div className=" flex flex-col gap-y-4 w-[60%]">
                <p className=" text-black/70">
                  Lekki: 6A Fola Osibo Road, Lekki Phase 1
                </p>
                <p className=" text-black/70">
                  Ikeja: Ikeja Town Square, 131 Obafemi Awolowo Way, Ikeja
                </p>
                <p className=" text-black/70">
                  Surulere: 53 Adelabu Street, Surulere
                </p>
                <p className=" text-black/70">Ajah: 62 Addo Road, Ajah</p>
              </div>
              <h2 className=" mt-4">
                <strong className=" text-black">hotline</strong>:
                <strong className=" text-purple">08128334941</strong>
              </h2>
            </div>

            <div className=" ">
              <div className=" flex-1  capitalize flex flex-col gap-y-4">
                <h1 className="uppercase font-medium text-orange">
                  important links
                </h1>
                <div className=" flex flex-col gap-y-4">
                  <NavLink to="">about us</NavLink>
                  <NavLink to="">contact us</NavLink>
                  <NavLink to="">privacy policy</NavLink>
                  <NavLink to="">terms & condition</NavLink>
                  <NavLink to="">drivers</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
export default Footer;
