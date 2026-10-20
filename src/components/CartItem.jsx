import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart } from "../redux/actions";
import { formatPrice } from "./ProductCard";
import ProductImage from "./ProductImage";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="cart-item">
      <div className="thumb" style={{ background: item.color }}><ProductImage product={item} /></div>
      <div className="info">
        <h4>{item.name}</h4>
        <p>{formatPrice(item.price)}</p>
        <div className="qty">
          <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label="Diminuer">−</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(addToCart(item))} aria-label="Augmenter">+</button>
        </div>
      </div>
      <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
        Retirer
      </button>
    </li>
  );
}
