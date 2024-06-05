import { FC, lazy } from "react"; 
import { Home } from "./pages";
const BudgetCake = lazy(() => import('./pages/BudgetCakes'))
const Weddings = lazy(()=>import('./pages/Weddings'))
const ChildrenCake = lazy(() => import("./pages/ChildrenCake"));
const DessertCake = lazy(() => import("./pages/DessertCake"));
const Store = lazy(() => import("./pages/Store"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
   

interface RouteProp {
  path: string;
  component: FC
  requiredAuth?: boolean;
}

export const appRoutes: RouteProp[] = [
  {
    path: "/",
    component: Home,
    requiredAuth: false,
  },
  {
    path: "/budget",
    component: BudgetCake,
    requiredAuth: false,
  },
  {
    path: "/wedding",
    component: Weddings,
    requiredAuth: false,
  },
  {
    path: "/children",
    component: ChildrenCake,
    requiredAuth: false,
  },
  {
    path: "/dessert",
    component: DessertCake,
    requiredAuth: false,
  },
  {
    path: "/store",
    component: Store,
    requiredAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requiredAuth: false,
  },
];