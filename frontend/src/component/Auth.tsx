import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {  useState } from "react";
import {
  registerUser,
  loginUser,
  setIsMember,
  closeAuthModal,
} from "../features/auth/authSlice";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "./Logo";
import clsx from "clsx";

interface RegisterType {
  name: string;
  email: string;
  password: string;
}

const initialState: RegisterType = {
  name: "",
  email: "",
  password: "",
};

interface LoginType {
  email: string;
  password: string;
}

const Auth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, isMember, name, token } = useSelector(
    (state: RootState) => state.auth
  );
  const [value, setValue] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password }: LoginType = value;
    
    if (isMember && email && password) { dispatch(loginUser({ email, password })) } if (!isMember && value) {
      dispatch(registerUser(value));
    }
    setValue(initialState)
    
  };
  console.log(error, isLoading, isMember, name, token);
  

  return (
    <>
      <div
        className={clsx(
          " fixed backdrop-blur-lg top-0 bottom-0 left-0 z-50 flex flex-col gap-y-7 justify-center items-center w-full h-screen mx-auto"
        )}
      >
        <div>
          <Logo />
        </div>
        <div
          className={clsx(
            " relative  flex flex-col w-2/4 p-4 rounded-sm shadow-[6px_-4px_36px_0px_#0a2020] text-white gap-3 bg-black"
          )}
        >
          <div
            className=" absolute top-1 right-1 text-4xl text-white cursor-pointer"
            onClick={() => dispatch(closeAuthModal())}
          >
            <IoCloseOutline />
          </div>
          <form
            onSubmit={onSubmit}
            className="  flex flex-col  p-4 text-white gap-3"
          >
            {!isMember && (
              <div className=" flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  className=" bg-white text-black"
                  type="name"
                  value={value.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className=" bg-white  text-black"
                type="email"
                value={value.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                className="bg-white  text-black"
                type="password"
                value={value.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            {error && <div className=" text-red-600 items-center">{String(error)}</div>}
            <button
              type="submit"
              disabled={isLoading}
              className={clsx(`${isLoading ? "bg-white/30" : "bg-orange"}`)}
            >
              {isLoading ? "Fetching User..." : "Submit"}
            </button>
            <div className=" flex flex-row items-center justify-center gap-2">
              <p>{isMember ? "Not a member yet? " : "Already member?"}</p>
              <button
                className=" text-blue-900 font-medium"
                onClick={() => dispatch(setIsMember())}
                type="button"
              >
                {isMember ? " Register" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Auth;
