import { useState } from "react";
import { MainService } from "../services/MainService.js";

const useItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const getProduct = (isbn) => {
    setIsLoading(true);
    try {
      MainService.getProduct(isbn).then((response) => {
        setProduct(response.data);
      });
    } catch (ex) {
      console.error("Error al obtener producto");
    } finally {
      setIsLoading(false);
    }
  };

  return { getProduct, isLoading, product };
};

export default useItem;
