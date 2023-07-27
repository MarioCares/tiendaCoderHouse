import { useState } from "react";
import { FirestoreService } from "../services/FirestoreService.js";

const useCreateOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const createOrder = async (data) => {
    setIsLoading(true);
    try {
      setOrderId(await FirestoreService.createOrder(data));
    } catch (ex) {
      console.error(ex.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createOrder, isLoading, orderId };
};

export default useCreateOrder;
