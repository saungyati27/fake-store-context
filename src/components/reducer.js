export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART":
      const isExisted = state.cart.find((ct) => ct.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, { ...payload }] };
      }
    case "REMOVE_FROM_CART":
      const removeItem = state.cart.filter((ct) => ct.id !== payload.id);
      return { ...state, cart: removeItem };

    default:
      return state;
  }
};
