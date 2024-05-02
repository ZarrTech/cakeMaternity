import { FC, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useRef } from "react";


const DeliveryCount: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollTrigger, setScrollTrigger] = useState(false)

  useEffect(() => {
    const boxHeight = ref.current?.offsetHeight
    boxHeight && boxHeight  ? setScrollTrigger(true) : setScrollTrigger(false)
    console.log(boxHeight);
    
 })
  
  
  return (
    <section className=" flex justify-center items-center w-full bg-pastel p-3 rounded-b-2xl" ref={ref}>
      {scrollTrigger && (
        <div className=" flex flex-col gap-3 font-bold text-orange text-center w-[60%] h-full">
          <div className="text-6xl">
            <CountUp start={0} end={7000} duration={5} />
          </div>
          <h1 className="text-2xl">successful cake delivery</h1>
        </div>
      )}
    </section>
  );
}
export default DeliveryCount