export const addProductToCart = (cartProducts, cartProductToAdd) => {
  const existingCartProduct = cartProducts.find(
    (cartProduct) => cartProduct.id === cartProductToAdd.id
  );

  if (existingCartProduct) {
    return cartProducts.map((cartProduct) =>
      cartProduct.id === cartProductToAdd.id
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct
    );
  }

  return [{ ...cartProductToAdd, quantity: 1 }, ...cartProducts];
};

export const removeProductFromCart = (cartProducts, cartProductToRemove) => {
  const existingCartProduct = cartProducts.find(
    (cartProduct) => cartProduct.id === cartProductToRemove.id
  );

  if (existingCartProduct.quantity === 1) {
    return cartProducts.filter(
      (cartProduct) => cartProduct.id !== cartProductToRemove.id
    );
  }

  return cartProducts.map((cartProduct) =>
    cartProduct.id === cartProductToRemove.id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct
  );
};

export const getCartItemCount = (cartProducts) =>
  cartProducts.reduce(
    (accumalatedQuantity, cartProduct) =>
      accumalatedQuantity + cartProduct.quantity,
    0
  );

export const getCartTotal = (cartProducts) =>
  cartProducts
    .reduce(
      (accumalatedQuantity, cartProduct) =>
        accumalatedQuantity +
        cartProduct.quantity * cartProduct.prices[0].amount,
      0
    )
    .toFixed(2);

export const clearProductFromCart = (cartProducts, item) =>
  cartProducts.filter((cartProduct) => cartProduct.id !== item.id);
