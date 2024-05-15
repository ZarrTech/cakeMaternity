import { FC } from "react";

interface HeroProps {
  text: string;
  url: string;
}

const Hero: FC<HeroProps> = ({ text, url }) => {
  return (
    <div className=" w-full p-2 bg-orange overflow-x-hidden hero rounded-b-3xl">
      <h1 className=" text-black capitalize font-extrabold text-wrap w-[300px]  heroText">
        {text}
      </h1>
      <div className="">
        <img className="h-full heroImage" src={url} alt="cake image" />
      </div>
    </div>
  );
};
export default Hero;
