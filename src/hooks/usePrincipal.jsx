import { useEffect, useState } from "react";
import { MainService } from "../services/MainService.js";

const usePrincipal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [principal, setPrincipal] = useState({});

  useEffect(() => {
    setIsLoading(true);
    MainService.getPrincipal()
      .then((response) => {
        setPrincipal(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, principal };
};

export default usePrincipal;
