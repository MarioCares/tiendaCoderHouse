import { useState } from "react";
import { FirestoreService } from "../services/FirestoreService.js";

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const getProducts = async (category) => {
    setIsLoading(true);
    try {
      const response =
        category !== undefined
          ? await FirestoreService.getCategory(category)
          : await FirestoreService.getCategories();
      setProducts(response);
    } catch (ex) {
      console.error("Error al obtener página principal");
    } finally {
      setIsLoading(false);
    }
  };

  return { getProducts, isLoading, products };
};

export default useProducts;
