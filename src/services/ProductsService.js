import DcProducts from "../stubby/DcProducts.js";

const getProductsByCategory = async (category) => {
  console.log("caregory", category);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DcProducts);
    }, 2000);
  });
};

export const ProductsServices = {
  getProductsByCategory,
};
