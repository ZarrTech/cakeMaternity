import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";


const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const error: any = useRouteError()
  return (
    <div className=" flex justify-center w-full h-screen items-center">
      <div className=" flex flex-col gap-y-4 items-center">
        <h1 className=" text-2xl">Oops!</h1>
        <p className=" font-bold text-orange text-3xl">
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          
        >
          back home
        </button>
      </div>
    </div>
  );
}
export default NotFound