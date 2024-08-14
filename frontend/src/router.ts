import { FC, lazy } from "react";
import { Home } from "./pages";
const BudgetCake = lazy(() => import("./pages/BudgetCakes"));
const Weddings = lazy(() => import("./pages/Weddings"));
const ChildrenCake = lazy(() => import("./pages/ChildrenCake"));
const DessertCake = lazy(() => import("./pages/DessertCake"));
const Store = lazy(() => import("./pages/Store"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"))
const Cart = lazy(() => import("./pages/Cart"))

interface RouteProp {
  path: string;
  component: FC;
  requiredAuth?: boolean;
}

export const appRoutes: RouteProp[] = [
  {
    path: "/",
    component: Home,
    requiredAuth: false,
  },
  {
    path: "products/budget",
    component: BudgetCake,
    requiredAuth: false,
  },
  {
    path: "products/wedding",
    component: Weddings,
    requiredAuth: false,
  },
  {
    path: "products/children",
    component: ChildrenCake,
    requiredAuth: false,
  },
  {
    path: "/products/dessert",
    component: DessertCake,
    requiredAuth: false,
  },
  {
    path: "/store",
    component: Store,
    requiredAuth: false,
  },
  {
    path: "/products/product/:productId",
    component: SingleProduct,
    requiredAuth: false,
  },
  {
    path: "/cart",
    component: Cart,
    requiredAuth: true,
  },
  {
    path: "*",
    component: NotFound,
    requiredAuth: false,
  },
];
