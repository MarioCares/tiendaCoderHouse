import "bulma/css/bulma.min.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import { useState } from "react";
import useMenuEntries from "../hooks/useMenuEntries.jsx";
import Loading from "../components/Loading.jsx";
import { Outlet } from "react-router-dom";

function Root() {
  const [cartQuantity] = useState(5);
  const { isLoading, menuEntries } = useMenuEntries();

  if (isLoading) return <Loading />;

  return (
    <>
      <Navbar menu={menuEntries} cartQuantity={cartQuantity} />
      <Outlet />
    </>
  );
}

export default Root;
