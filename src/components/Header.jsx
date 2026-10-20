import { useSelector } from "react-redux";

export default function Header({ search, onSearch, onOpenCart }) {
  // useSelector LIT l'état global. Ici : nombre total d'articles dans le panier.
  const count = useSelector((state) => state.cart.items.reduce((sum, i) => sum + i.quantity, 0));

  return (
    <>
      <div className="topbar">Livraison dans les 58 wilayas · Paiement à la livraison · Matériel garanti</div>
      <header className="header">
        <div className="brand">
          <span className="logo" aria-hidden="true" />
          <h1>Medica<span>DZ</span></h1>
        </div>
        <input
          className="search"
          type="search"
          placeholder="Rechercher un produit, ex. tensiomètre…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="cart-btn" onClick={onOpenCart} aria-label="Ouvrir le panier">
          Panier
          <span className="badge">{count}</span>
        </button>
      </header>
    </>
  );
}
