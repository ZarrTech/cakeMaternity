import { FC, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useRef } from "react";
import HorizontalLine from "../HorizontalLine";

interface CountFunc {
  start: number;
  end: number;
  duration: number;
}

const DeliveryCount: FC<CountFunc> = ({ start, end, duration }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(start);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          let startTimestamp: null | number = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const currentValue = Math.min(
              start + Math.floor((progress / duration) * (end - start)),
              end
            );

            setCount(currentValue);

            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [start, end, duration]);

  return (
    <section className="items-center w-full py-[3rem]" ref={ref}>
      <div className=" flex flex-col gap-3  text-orange text-center w-full my-[1rem]">
        <div className=" text-6xl font-bold">{count}</div>
        <h1 className="text-[1.5rem] font-medium capitalize">
          successful cake delivery
        </h1>
      </div>
      <HorizontalLine />
    </section>
  );
};
export default DeliveryCount;
