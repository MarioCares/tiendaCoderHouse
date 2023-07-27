const SimpleCart = (cart) => {
  return cart.map((product) => ({
    isbn: product.isbn,
    name: product.name,
    price: product.price,
  }));
};

export default SimpleCart;
