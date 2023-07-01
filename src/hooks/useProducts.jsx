import { useState } from "react";
import { MainService } from "../services/MainService.js";

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const getProducts = (category) => {
    setIsLoading(true);
    try {
      if (category !== undefined) {
        MainService.getCategory(category).then((response) => {
          setProducts(response.data);
        });
      } else {
        MainService.getPrincipal().then((response) => {
          setProducts(response.data);
        });
      }
    } catch (ex) {
      console.error("Error al obtener página principal");
    } finally {
      setIsLoading(false);
    }
  };

  return { getProducts, isLoading, products };
};

export default useProducts;
