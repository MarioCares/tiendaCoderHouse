import "bulma/css/bulma.min.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import useMenuEntries from "../hooks/useMenuEntries.jsx";
import Loading from "../components/Loading.jsx";
import { Outlet } from "react-router-dom";

function Root() {
  const { isLoading, menuEntries } = useMenuEntries();

  if (isLoading) return <Loading />;

  return (
    <>
      <Navbar menu={menuEntries} />
      <Outlet />
    </>
  );
}

export default Root;
