import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Root from "./components/Root.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<ItemListContainer />} />
        <Route path={"/editorial/:id"} element={<h1>Editorial X</h1>} />
        <Route path={"/comic/:id"} element={<h1>Comic X</h1>} />
        <Route path={"/manga/:id"} element={<h1>Manga X</h1>} />
        <Route path={"/ofertas"} element={<h1>Ofertas!</h1>} />
      </Route>
    </Route>
  )
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
