import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer";

// Le store = l'unique "boîte" qui contient l'état global de l'application.
const store = configureStore({
  reducer: { cart: cartReducer }, // state.cart.items
});

export default store;
