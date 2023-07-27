import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  ItemDetailContainer,
  ItemListContainer,
} from "./components/Product/index.js";
import { CartProvider } from "./context/CartContext.jsx";
import { ErrorPage, Root, Cart, Checkout } from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={"/"}
      element={
        <CartProvider>
          <Root />
        </CartProvider>
      }
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<ItemListContainer />} />
        <Route path={"/category/:categoryId"} element={<ItemListContainer />} />
        <Route path={"/item/:isbn"} element={<ItemDetailContainer />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/checkout"} element={<Checkout />} />
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
