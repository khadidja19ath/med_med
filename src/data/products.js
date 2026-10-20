// Données fixes de la boutique (pas de base de données dans ce TP).
// - "oldPrice" (optionnel) : s'il existe, on affiche une promotion.
// - "art" : nom du dessin affiché par défaut (voir ProductArt.jsx).
// - "image" : chemin d'une vraie photo. Déposez le fichier dans public/images
//   (ex. public/images/tensiometre.jpg) et elle remplace automatiquement le dessin.
export const categories = ["Tous", "Promotions", "Diagnostic", "Mobilité", "Respiration", "Consommables"];

export const products = [
  { id: 1, ref: "MD-001", name: "Tensiomètre électronique au bras", price: 6900, oldPrice: 8200, category: "Diagnostic", art: "tensiometre", image: "/images/tensiometre.jpg", rating: 4.7, reviews: 128, description: "Écran large, mémoire 2 x 90 mesures." },
  { id: 2, ref: "MD-002", name: "Stéthoscope double pavillon", price: 4500, category: "Diagnostic", art: "stetho", image: "/images/stethoscope.jpg", rating: 4.6, reviews: 84, description: "Acoustique claire, olives souples." },
  { id: 3, ref: "MD-003", name: "Thermomètre infrarouge frontal", price: 3200, category: "Diagnostic", art: "thermo", image: "/images/thermometre.jpg", rating: 4.5, reviews: 212, description: "Mesure en 1 seconde, sans contact." },
  { id: 4, ref: "MD-004", name: "Oxymètre de pouls", price: 2800, oldPrice: 3400, category: "Diagnostic", art: "oxy", image: "/images/oxymetre.jpg", rating: 4.4, reviews: 97, description: "Saturation et fréquence cardiaque." },
  { id: 5, ref: "MD-005", name: "Glucomètre + 50 bandelettes", price: 4200, category: "Diagnostic", art: "gluco", image: "/images/glucometre.jpg", rating: 4.8, reviews: 156, description: "Résultat en 5 secondes." },
  { id: 6, ref: "MD-006", name: "Fauteuil roulant pliant", price: 38000, category: "Mobilité", art: "fauteuil", image: "/images/fauteuil.jpg", rating: 4.6, reviews: 41, description: "Acier léger, freins de sécurité." },
  { id: 7, ref: "MD-007", name: "Béquilles réglables (paire)", price: 3800, category: "Mobilité", art: "bequilles", image: "/images/bequilles.jpg", rating: 4.3, reviews: 63, description: "Aluminium, hauteur réglable." },
  { id: 8, ref: "MD-008", name: "Déambulateur pliable 4 roues", price: 9500, oldPrice: 11000, category: "Mobilité", art: "deamb", image: "/images/deambulateur.jpg", rating: 4.5, reviews: 52, description: "Siège intégré, freins à main." },
  { id: 9, ref: "MD-009", name: "Nébuliseur à compresseur", price: 7500, category: "Respiration", art: "nebu", image: "/images/nebuliseur.jpg", rating: 4.6, reviews: 74, description: "Masque adulte et enfant inclus." },
  { id: 10, ref: "MD-010", name: "Concentrateur d'oxygène 5 L", price: 120000, oldPrice: 135000, category: "Respiration", art: "o2", image: "/images/concentrateur.jpg", rating: 4.9, reviews: 23, description: "Silencieux, usage continu." },
  { id: 11, ref: "MD-011", name: "Masques chirurgicaux (boîte de 50)", price: 600, category: "Consommables", art: "masques", image: "/images/masques.jpg", rating: 4.4, reviews: 340, description: "3 plis, filtration bactérienne." },
  { id: 12, ref: "MD-012", name: "Gants d'examen nitrile (boîte de 100)", price: 1400, category: "Consommables", art: "gants", image: "/images/gants.jpg", rating: 4.7, reviews: 289, description: "Sans poudre, usage unique." },
];
