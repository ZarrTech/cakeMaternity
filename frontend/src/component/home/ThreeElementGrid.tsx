import { threeElement } from "../data/data";

const ThreeElementGrid = () => {
  return (
    <div className=" pt-[3rem] w-full">
      <div className=" flex flex-col md:flex-row justify-center gap-y-7 md:gap-x-7 w-full">
        {threeElement.map((element: any, id) => {
          return (
            <div key={id} className=" flex flex-col items-center">
              <div className=" p-4 bg-orange rounded-full text-pastel text-[1.7rem]">
                <element.icon />
              </div>
              <h1 className=" font-medium text-orange">{element.header}</h1>
              <p className=" w-[60%] text-center text-slate-700">
                {element.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ThreeElementGrid;
