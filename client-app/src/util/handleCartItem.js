export function saveCartItem(items) {
  localStorage.setItem(process.env.REACT_APP_CART, JSON.stringify(items));
}

export function getCartItem() {
  const items = localStorage.getItem(process.env.REACT_APP_CART);
  const dataCart = JSON.parse(items);
  return dataCart;
}

export function removeCart() {
  localStorage.removeItem(process.env.REACT_APP_CART);
}
