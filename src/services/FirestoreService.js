import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig.js";

const getData = async (collection, identifier) => {
  const docRef = doc(db, collection, identifier);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("Elemento no existe");
  }
};

const getMenuEntries = async (currentMenu) => {
  try {
    return getData("menu", currentMenu);
  } catch {
    throw new Error("Menú no disponible");
  }
};

const foreignProducts = (category) => {
  return Promise.all(
    category.products.map(async (productRef) => {
      const docSnap = await getDoc(productRef);
      return docSnap.data();
    })
  );
};

const getCategories = async () => {
  try {
    const snapshot = await getDocs(collection(db, "categories"));
    const initialCategories = snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return Promise.all(
      initialCategories.map(async (initial) => {
        return {
          id: initial.id,
          name: initial.data.name,
          products: await foreignProducts(initial.data),
        };
      })
    );
  } catch (ex) {
    console.log("ex", ex);
    throw new Error("Producto no existe");
  }
};

const getCategory = async (id) => {
  try {
    const category = await getData("categories", id);
    const products = await foreignProducts(category);
    return [{ id, ...category, products }];
  } catch (e) {
    throw new Error("Categoría no existe");
  }
};

const getProduct = async (isbn) => {
  try {
    return getData("products", isbn);
  } catch {
    throw new Error("Producto no existe");
  }
};

const createOrder = async (data) => {
  try {
    const ordersRef = collection(db, "orders");
    const orderRef = doc(ordersRef);
    const id = orderRef.id;
    const orderData = { id, ...data };
    await setDoc(orderRef, orderData);
    return id;
  } catch (ex) {
    console.error(ex);
    throw new Error("Error al crear Orden");
  }
};

export const FirestoreService = {
  getMenuEntries,
  getCategories,
  getProduct,
  getCategory,
  createOrder,
};
