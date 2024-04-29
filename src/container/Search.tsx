import { ChangeEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import clsx from "clsx";


const Search = () => {
    const [input, setInput] = useState<string>("")

    const inputValue = (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
    };
  return (
    <div className=" relative flex justify-center items-center w-[300px] h-8">
      <input
        type="text"
        className=" text-sm bg-white h-full px-3 outline-none"
        placeholder="Product Search"
        onChange={inputValue}
      />
      <button className={clsx(" bg-black h-full px-3 rounded-r-2xl")}>
        <IoIosSearch size={23} />
      </button>
      <button
        className={clsx(
          "absolute left-0 bg-white/50 text-black rounded-full p-1 transition-all duration-500",
          input !== "" ? "block" : "hidden"
              )}
              onClick={()=>{setInput('')}}
      >
        <MdOutlineClear size={23} />
      </button>
    </div>
  );
};
export default Search;
