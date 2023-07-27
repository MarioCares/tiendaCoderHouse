import { useEffect, useState } from "react";
import { FirestoreService } from "../services/FirestoreService.js";

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
    FirestoreService.getMenuEntries(import.meta.env.VITE_CURRENT_MENU)
      .then((menu) => setMenuEntries(menu))
      .catch((ex) => {
        console.error(`${ex.message}. Utilizando Navbar en blanco`);
        setMenuEntries(blankNavBar);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, menuEntries };
};

export default useMenuEntries;
