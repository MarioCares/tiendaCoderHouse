import { useState } from "react";
import { FirestoreService } from "../services/FirestoreService.js";

const useItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const getProduct = async (isbn) => {
    setIsLoading(true);
    try {
      const product = await FirestoreService.getProduct(isbn);
      setProduct(product);
    } catch (ex) {
      console.error(`Error al obtener producto: ${ex.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { getProduct, isLoading, product };
};

export default useItem;
