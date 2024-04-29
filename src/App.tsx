import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Fondant,
  Weddings,
  ChildrenCake,
  DessertCake,
  DoubleLayered,
  FootballCake,
  FourLayered,
  FourStep,
  Home,
  IceCreamCake,
  ReceptionCake,
  SingleLayered,
  SingleStep,
  Square,
  ThreeStep,
  TraditionalCake,
  ThreeLayered,
  TwoStep,
} from "./pages";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/fondant" element={<Fondant />} />
      <Route path="/wedding" element={<Weddings />} />
      <Route path="/children-cakes" element={<ChildrenCake />} />
      <Route path="/dessert-cakes" element={<DessertCake />} />
      <Route path="/double-Layered-cakes" element={<DoubleLayered />} />
      <Route path="/football-cakes" element={<FootballCake />} />
      <Route path="/four-layered-cakes" element={<FourLayered />} />
      <Route path="/four-step-cakes" element={<FourStep />} />
      <Route path="/ice-cream-cakes" element={<IceCreamCake />} />
      <Route path="/reception-wedding-cakes" element={<ReceptionCake />} />
      <Route path="/single-layered-cakes" element={<SingleLayered />} />
      <Route path="/single-step-cakes" element={<SingleStep />} />
      <Route path="/square-cakes" element={<Square />} />
      <Route path="/three-step-cakes" element={<ThreeStep />} />
      <Route path="/traditional-wedding-cakes" element={<TraditionalCake />} />
      <Route path="/three-layered-cakes" element={<ThreeLayered />} />
      <Route path="/two-step-cakes" element={<TwoStep />} />
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
