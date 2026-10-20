import { ADD_TO_CART, DECREASE_QUANTITY, REMOVE_FROM_CART, CLEAR_CART } from "./actions";

// L'état global géré par Redux : la liste des produits du panier.
// Chaque élément = un produit + sa quantité.
const initialState = { items: [] };

// Le reducer reçoit (ancien état, action) et renvoie le NOUVEL état.
// Règle d'or : on ne modifie jamais l'état directement, on en crée une copie.
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        // Déjà dans le panier : on augmente la quantité.
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === exists.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      // Sinon : on ajoute le produit avec une quantité de 1.
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items
          .map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item))
          .filter((item) => item.quantity > 0), // quantité 0 → on retire la ligne
      };

    case REMOVE_FROM_CART:
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
}
