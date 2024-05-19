import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  BudgetCakes,
  Weddings,
  ChildrenCake,
  DessertCake,
  Home,
} from "./pages";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/budget" element={<BudgetCakes/>} />
      <Route path="/wedding" element={<Weddings />} />
      <Route path="/children" element={<ChildrenCake />} />
      <Route path="/dessert" element={<DessertCake />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
