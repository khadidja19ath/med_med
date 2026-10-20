import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/actions";
import CartItem from "./CartItem";
import { formatPrice } from "./ProductCard";

export default function Cart({ open, onClose }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Valeur calculée à partir de l'état : pas besoin de la stocker.
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h2>Votre panier</h2>
          <button className="close" onClick={onClose} aria-label="Fermer">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="empty">Votre panier est vide. Ajoutez un produit pour commencer.</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <div className="cart-foot">
              <div className="total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <button className="btn ghost" onClick={() => dispatch(clearCart())}>
                Vider le panier
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
