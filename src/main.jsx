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
import {
  ItemDetailContainer,
  ItemListContainer,
} from "./components/Product/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<ItemListContainer />} />
        <Route path={"/category/:categoryId"} element={<ItemListContainer />} />
        <Route path={"/item/:isbn"} element={<ItemDetailContainer />} />
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
