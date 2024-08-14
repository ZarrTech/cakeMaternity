import { useDispatch ,useSelector } from "react-redux";
import { RootState,AppDispatch } from "./store";
import {setUser} from "./features/auth/authSlice";

import { Routes, Route, useLocation } from "react-router-dom";
import { appRoutes } from "./router";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { FC, Suspense, useEffect } from "react";
import { Auth } from "./component";

const App: FC = () => {
  const location = useLocation();
  const { isOpen} = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>()
  const token: string | null = localStorage.getItem("token");
  const name: string | null = localStorage.getItem("name");
  
  useEffect(() => {
    if (token) {
    dispatch(setUser({token, name}));
    }
  }, [dispatch, token, name])
    

  return (
    <div className="">
      <SwitchTransition>
        <CSSTransition key={location.pathname} timeout={300} classNames="fade">
          <Suspense fallback={<h1>loading...</h1>}>
            <Routes location={location}>
              {appRoutes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                );
              })}
            </Routes>
            {isOpen && <Auth />}
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default App;
