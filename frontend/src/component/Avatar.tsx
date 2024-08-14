import { UseDispatch, useDispatch, useSelector } from "react-redux";
import {
  logout,
  openAuthModal,
  closeAuthModal,
} from "../features/auth/authSlice";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";

const Avatar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { name } = useSelector((state: RootState) => state.auth)
  
  useEffect(() => {
    if (name) {
      dispatch(closeAuthModal())
    }
  }, [dispatch, name])
  return (
    <div className=" flex items-center gap-2">
      {name ? (
        <button className=" auth-btn" onClick={()=>dispatch(logout())}>logout</button>
      ) : (
        <button className=" auth-btn" onClick={()=>dispatch(openAuthModal())}>login</button>
      )}
      <p className=" text-[1rem] capitalize">{name}</p>
    </div>
  );
};
export default Avatar;
