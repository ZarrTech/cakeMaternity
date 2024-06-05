import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { appRoutes } from "./router";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { FC, Suspense } from "react"


const App: FC = () => {
 const location = useLocation()
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
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
