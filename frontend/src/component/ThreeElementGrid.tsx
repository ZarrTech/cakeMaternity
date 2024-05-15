
import { threeElement } from "./data/data";


const ThreeElementGrid = () => {
    return (
      <div className="threeEl ">
        <div className="El ">
          {threeElement.map((element: any) => {
            return (
              <div className="el">
                <div className=" elIcon">
                  <element.icon />
                </div>
                <h1 className=" elHeader">{element.header}</h1>
                <p className=" elText">{element.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
};
export default ThreeElementGrid;
