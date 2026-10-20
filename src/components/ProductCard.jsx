import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import ProductImage from "./ProductImage";

export const formatPrice = (n) => n.toLocaleString("fr-FR") + " DA";

// "product" arrive par les PROPS : c'est la donnée que le parent donne à l'enfant.
export default function ProductCard({ product }) {
  // useDispatch ENVOIE une action au store.
  const dispatch = useDispatch();

  // Pourcentage de réduction (seulement si un ancien prix existe).
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <article className="card">
      <div className="card-img">
        <ProductImage product={product} />
        {discount > 0 && <span className="promo">-{discount} %</span>}
      </div>
      <div className="card-body">
        <p className="card-meta">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="rating">
          <span className="stars">★</span> {product.rating} <span className="rev">({product.reviews} avis)</span>
        </p>
        <p className="card-desc">{product.description}</p>
        <div className="price">
          <strong>{formatPrice(product.price)}</strong>
          {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
        </div>
        <button className="btn" onClick={() => dispatch(addToCart(product))}>
          Ajouter au panier
        </button>
      </div>
    </article>
  );
}
