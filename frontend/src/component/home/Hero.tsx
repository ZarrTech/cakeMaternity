import { FC } from "react";
import Button from "../Button";

interface HeroProps {
  text: string;
  para: string;
  url: string;
}

const Hero: FC<HeroProps> = ({ text, url, para }) => {
  return (
    <div className=" w-full p-2 bg-orange overflow-x-hidden hero rounded-b-3xl">
      <div className=" w-[300px] heroText">
        <h1 className=" text-black capitalize font-extrabold text-wrap mb-4">
          {text}
        </h1>
        <p className=" text-[1rem] text-white/70 font-medium  bg-black/5 p-3 mb-4">
          {para}
        </p>
        <span>
          <Button url='/store' name="shop me" />
        </span>
      </div>

      <div className="">
        <img className="h-full heroImage" src={url} alt="cake image" />
      </div>
    </div>
  );
};
export default Hero;
