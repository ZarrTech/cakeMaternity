import { FC } from "react"

interface HeroProps{
    text: string
   url: string
}

const Hero: FC<HeroProps> = ({text, url}) => {
  return (
      <div className="relative flex flex-col lg:flex-row justify-between lg:items-center w-full h-[550px] p-2 bg-black overflow-x-hidden">
          <h1 className=" absolute top-[4rem] lg:static text-4xl lg:text-6xl capitalize font-extrabold lg:flex-1 lg:pb-60  text-wrap w-[400px] ">
              {text}
          </h1>
          <img className=" lg:flex-1 h-full ml-[16rem] " src={url} alt="cake image"/>
    </div>
  )
}
export default Hero