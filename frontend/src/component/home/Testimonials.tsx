import { MdOutlineStarOutline } from "react-icons/md";
import HorizontalLine from "../HorizontalLine";

const Testimonials = () => {
  return (
    <section className=" flex flex-col justify-center items-center gap-y-4 pt-[3rem] text-center">
      <h1 className=" text-orange text-3xl font-medium capitalize">
        what others are saying about us
      </h1>
      <div className=" mt-6">
        <div className=" flex flex-col items-center justify-center gap-y-4">
          <div className=" flex justify-center items-center text-3xl text-orange">
            <MdOutlineStarOutline />
            <MdOutlineStarOutline />
            <MdOutlineStarOutline />
            <MdOutlineStarOutline />
            <MdOutlineStarOutline />
          </div>
          <p className=" text-black/60 text-[1.1rem] w-[50%]">
            Amazing Service, got my order delivered the same day i requested. I
            could even give more than five stars if it were possible.
          </p>
          <div className=" flex flex-col justify-center items-center">
            <h2 className=" text-purple font-medium">Lawrence A.</h2>
            <p className="text-black/60 ">Victoria Island</p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-4 mt-4">
          <div className=" flex justify-center items-center text-3xl text-orange">
            <MdOutlineStarOutline />
            <MdOutlineStarOutline />
            <MdOutlineStarOutline />
            <MdOutlineStarOutline />
            <MdOutlineStarOutline />
          </div>
          <p className=" text-black/60 text-[1.1rem] w-[50%]">
            The décor was really beautiful and the cake tasted really nice. It
            was well appreciated. The delivery was fast and seamless within a
            short period of time. Thanks a lot
          </p>
          <div className=" flex flex-col justify-center items-center">
            <h2 className=" text-purple font-medium">Fakunmoju A.</h2>
            <p className="text-black/60">Lagos</p>
          </div>
        </div>
      </div>
      <HorizontalLine />
    </section>
  );
};
export default Testimonials;
