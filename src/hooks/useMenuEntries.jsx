import { useEffect, useState } from "react";
import { MainService } from "../services/MainService.js";

const useMenuEntries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menuEntries, setMenuEntries] = useState({});

  useEffect(() => {
    setIsLoading(true);
    MainService.getMenuEntries()
      .then((response) => {
        setMenuEntries(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, menuEntries };
};

export default useMenuEntries;
