import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import MenuEntries from "./components/Navbar/MenuEntries.js";
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  const [cartQuantity] = useState(5);
  return (
    <>
      <Navbar menu={MenuEntries} cartQuantity={cartQuantity} />
      <ItemListContainer />
    </>
  );
}

export default App;
