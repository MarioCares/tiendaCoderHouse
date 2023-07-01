import axios from "axios";

const API_URL = "https://tienda-banana-api.vercel.app";

const getMenuEntries = async () => {
  return await axios.get(`${API_URL}/menu-entries.json`, {
    method: "GET",
  });
};

const getPrincipal = async () => {
  return await axios.get(`${API_URL}/principal.json`, {
    method: "GET",
  });
};

const getCategory = async (category) => {
  return await axios.get(`${API_URL}/category/${category}.json`, {
    method: "GET",
  });
};

const getProduct = async (isbn) => {
  return await axios.get(`${API_URL}/item/${isbn}.json`, {
    method: "GET",
  });
};

export const MainService = {
  getMenuEntries,
  getPrincipal,
  getCategory,
  getProduct,
};
