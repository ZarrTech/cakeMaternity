import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Button{
  name?: string;
  url: string
}

const Button: FC<Button> = ({ name, url }) => {
  const navigate = useNavigate()
  return (
      <button className=" py-2 px-4 font-medium text-white rounded-lg text-[1.1rem] capitalize bg-black hover:shadow-lg" onClick={()=>navigate(url)}>
      {name }
    </button>
  )
}
export default Button