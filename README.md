# Medica DZ – Boutique de matériel et équipement médical

**Étudiant(e) :** Khadidja Ait Hocine
**Module :** WAMD – TD/TP 2 – ENSTA

## Description
Boutique en ligne de matériel médical en React + Redux : catalogue (diagnostic, mobilité, respiration, consommables), recherche, filtre par catégorie, tri par prix, promotions et panier dynamique.

## Technologies
React 18, Redux (Redux Toolkit `configureStore`), React-Redux, Vite, JavaScript ES6+, CSS.

## Composants React principaux
- `App` : page principale, état local (recherche, catégorie, tri, panier ouvert/fermé)
- `Header` : nom de la boutique + compteur du panier
- `ProductList` / `ProductCard` : catalogue et fiche produit
- `Cart` / `CartItem` : panier avec quantités et total

## État Redux
`state.cart.items` : tableau de `{ id, name, price, emoji, ..., quantity }`
- Actions : `ADD_TO_CART`, `DECREASE_QUANTITY`, `REMOVE_FROM_CART`, `CLEAR_CART`
- Reducer : `src/redux/reducer.js` – Store : `src/redux/store.js`

## Fonctionnalités
Catalogue, ajout/retrait du panier, quantités, total, recherche, filtre par catégorie, tri par prix, affichage des promotions, design responsive.

## Lancer l'application
```bash
npm install
npm run dev
```
Puis ouvrir http://localhost:5173
