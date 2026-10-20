import { useState } from "react";
import ProductArt from "./ProductArt";

// Affiche la vraie photo si le fichier existe dans public/images,
// sinon le dessin du produit. L'état local "failed" décide.
export default function ProductImage({ product }) {
  const [failed, setFailed] = useState(false);

  if (failed || !product.image) {
    return <ProductArt name={product.art} />;
  }
  return <img src={product.image} alt={product.name} loading="lazy" onError={() => setFailed(true)} />;
}
