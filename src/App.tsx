import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { SpecialCakes, BudgetCakes, Fondant, Weddings } from "./pages";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/products_category">
        <Route path="/budget" element={<BudgetCakes />} />
        <Route path="/special" element={<SpecialCakes />} />
        <Route path="/fondant" element={<Fondant />} />
        <Route path="/wedding" element={<Weddings />} />
      </Route>
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
