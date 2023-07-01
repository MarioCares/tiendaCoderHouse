import { useEffect, useState } from "react";
import { MainService } from "../services/MainService.js";

const useMenuEntries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menuEntries, setMenuEntries] = useState({});

  const blankNavBar = {
    brand: {
      name: "Cómics Banana",
      img: "/public/vite.svg",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    MainService.getMenuEntries()
      .then((response) => {
        setMenuEntries(response.data);
      })
      .catch(() => {
        console.error("Error al obtener NavBar. Utilizando Navbar en blanco");
        setMenuEntries(blankNavBar);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, menuEntries };
};

export default useMenuEntries;
