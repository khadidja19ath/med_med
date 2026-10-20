// 1) Les TYPES d'actions : des noms uniques pour décrire ce qui se passe.
export const ADD_TO_CART = "cart/add";
export const DECREASE_QUANTITY = "cart/decrease";
export const REMOVE_FROM_CART = "cart/remove";
export const CLEAR_CART = "cart/clear";

// 2) Les ACTION CREATORS : des fonctions qui fabriquent l'action à envoyer (dispatch).
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const decreaseQuantity = (id) => ({ type: DECREASE_QUANTITY, payload: id });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });
export const clearCart = () => ({ type: CLEAR_CART });
