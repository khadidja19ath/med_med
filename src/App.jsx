import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductArt from "./components/ProductArt";
import Cart from "./components/Cart";
import { products, categories } from "./data/products";

export default function App() {
  // ÉTAT LOCAL (useState) : propre à ce composant, utile seulement à l'interface.
  const [category, setCategory] = useState("Tous");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [cartOpen, setCartOpen] = useState(false);

  // 1) Filtrer par catégorie (ou promotions) et par recherche
  const visible = products.filter((p) => {
    const okCategory =
      category === "Tous" || (category === "Promotions" ? Boolean(p.oldPrice) : p.category === category);
    return okCategory && p.name.toLowerCase().includes(search.toLowerCase());
  });

  // 2) Trier (on copie le tableau avant de le trier)
  const sorted = [...visible].sort((a, b) => {
    if (sort === "asc") return a.price - b.price;
    if (sort === "desc") return b.price - a.price;
    return a.id - b.id;
  });

  return (
    <>
      <Header search={search} onSearch={setSearch} onOpenCart={() => setCartOpen(true)} />

      <nav className="tabs">
        {categories.map((c) => (
          <button key={c} className={`tab ${c === category ? "active" : ""}`} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="tag">Offres du mois</p>
          <h2>Équipez votre cabinet et votre maison</h2>
          <p>Jusqu'à -20 % sur une sélection de matériel médical.</p>
          <button className="btn light" onClick={() => setCategory("Promotions")}>Voir les promotions</button>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div><ProductArt name="fauteuil" /></div>
          <div><ProductArt name="tensiometre" /></div>
          <div><ProductArt name="o2" /></div>
        </div>
      </section>

      <main className="container">
        <div className="toolbar">
          <h2>{category === "Tous" ? "Tous les produits" : category} <span>({sorted.length})</span></h2>
          <label className="sort">
            Trier par
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="default">Pertinence</option>
              <option value="asc">Prix croissant</option>
              <option value="desc">Prix décroissant</option>
            </select>
          </label>
        </div>
        <ProductList products={sorted} />
      </main>

      <footer className="footer">
        <div><h4>Medica DZ</h4><p>Matériel et équipement médical pour les professionnels et les familles.</p></div>
        <div><h4>Service client</h4><p>Livraison dans les 58 wilayas<br />Paiement à la livraison</p></div>
        <div><h4>Contact</h4><p>contact@medica-dz.example<br />Alger, Algérie</p></div>
      </footer>

      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
