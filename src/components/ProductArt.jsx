// Dessins vectoriels (SVG) des produits : ils s'affichent toujours, sans internet.
const INK = "#0B2545", BLUE = "#1D6FEB", PALE = "#DCE8FB", GREEN = "#12B76A", RED = "#E5484D", GREY = "#9AA8BD";

const art = {
  tensiometre: (
    <>
      <rect x="30" y="40" width="70" height="72" rx="12" fill="#fff" stroke={INK} strokeWidth="3" />
      <rect x="40" y="50" width="50" height="28" rx="5" fill={INK} />
      <text x="65" y="71" textAnchor="middle" fontSize="17" fontWeight="800" fill="#7CF0B0">120</text>
      <circle cx="65" cy="95" r="8" fill={RED} />
      <path d="M100 85 C110 85 108 75 118 75" stroke={INK} strokeWidth="3" fill="none" />
      <rect x="118" y="48" width="62" height="54" rx="10" fill={BLUE} />
      <rect x="118" y="64" width="62" height="8" fill="#fff" opacity=".4" />
    </>
  ),
  stetho: (
    <>
      <path d="M66 22 V58 C66 84 106 84 106 58 V22" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="66" cy="20" r="6" fill={GREY} /><circle cx="106" cy="20" r="6" fill={GREY} />
      <path d="M86 78 V104 C86 128 134 128 134 102" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="134" cy="98" r="17" fill={GREY} stroke={INK} strokeWidth="3" />
      <circle cx="134" cy="98" r="9" fill={BLUE} />
    </>
  ),
  thermo: (
    <>
      <rect x="50" y="42" width="86" height="36" rx="15" fill="#fff" stroke={INK} strokeWidth="3" />
      <rect x="134" y="50" width="24" height="20" rx="6" fill={BLUE} />
      <circle cx="82" cy="60" r="8" fill={GREEN} />
      <path d="M72 78 L67 118 Q67 126 76 126 H90 Q98 126 98 118 L96 78 Z" fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </>
  ),
  oxy: (
    <>
      <rect x="45" y="52" width="110" height="48" rx="18" fill={BLUE} />
      <rect x="57" y="60" width="52" height="26" rx="6" fill={INK} />
      <text x="83" y="80" textAnchor="middle" fontSize="17" fontWeight="800" fill="#7CF0B0">98</text>
      <rect x="118" y="60" width="26" height="32" rx="9" fill={PALE} />
    </>
  ),
  gluco: (
    <>
      <rect x="52" y="22" width="62" height="104" rx="14" fill="#fff" stroke={INK} strokeWidth="3" />
      <rect x="62" y="34" width="42" height="26" rx="4" fill={INK} />
      <text x="83" y="53" textAnchor="middle" fontSize="15" fontWeight="800" fill="#7CF0B0">5.4</text>
      <circle cx="83" cy="86" r="10" fill={GREEN} />
      <rect x="128" y="36" width="14" height="72" rx="3" fill={PALE} stroke={INK} strokeWidth="2" />
      <path d="M165 66 q-9 15 0 22 q9 -7 0 -22z" fill={RED} />
    </>
  ),
  fauteuil: (
    <>
      <circle cx="76" cy="96" r="32" fill="none" stroke={INK} strokeWidth="5" />
      <circle cx="76" cy="96" r="22" fill="none" stroke={GREY} strokeWidth="2" />
      <circle cx="152" cy="120" r="12" fill={INK} />
      <path d="M66 38 V80 H136 L152 120" stroke={BLUE} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 34 H80" stroke={INK} strokeWidth="7" strokeLinecap="round" />
      <rect x="76" y="62" width="64" height="13" rx="6" fill={BLUE} />
    </>
  ),
  bequilles: (
    <>
      {[0, 56].map((dx) => (
        <g key={dx} transform={`translate(${dx} 0)`}>
          <path d="M70 20 L54 128" stroke={BLUE} strokeWidth="8" strokeLinecap="round" />
          <rect x="52" y="30" width="26" height="11" rx="5" fill={INK} transform="rotate(-10 65 35)" />
          <rect x="49" y="64" width="26" height="9" rx="4" fill={INK} transform="rotate(-10 62 68)" />
          <circle cx="54" cy="128" r="6" fill={INK} />
        </g>
      ))}
    </>
  ),
  deamb: (
    <>
      <path d="M58 38 V112 M142 38 V112" stroke={BLUE} strokeWidth="7" strokeLinecap="round" />
      <path d="M52 38 H148" stroke={INK} strokeWidth="8" strokeLinecap="round" />
      <path d="M58 78 H142" stroke={BLUE} strokeWidth="5" />
      <rect x="68" y="64" width="64" height="10" rx="5" fill={INK} />
      <circle cx="58" cy="120" r="11" fill={INK} /><circle cx="142" cy="120" r="11" fill={INK} />
    </>
  ),
  nebu: (
    <>
      <rect x="28" y="60" width="92" height="58" rx="12" fill="#fff" stroke={INK} strokeWidth="3" />
      <circle cx="48" cy="86" r="8" fill={GREEN} />
      <rect x="64" y="80" width="44" height="9" rx="4" fill={PALE} />
      <path d="M120 84 C152 84 138 50 160 50" stroke={INK} strokeWidth="3" fill="none" />
      <path d="M154 38 Q188 36 186 62 Q170 80 154 62 Z" fill={BLUE} />
    </>
  ),
  o2: (
    <>
      <rect x="52" y="18" width="96" height="104" rx="14" fill="#fff" stroke={INK} strokeWidth="3" />
      <rect x="66" y="32" width="68" height="26" rx="5" fill={INK} />
      <text x="100" y="52" textAnchor="middle" fontSize="16" fontWeight="800" fill="#7CF0B0">5 L</text>
      <circle cx="84" cy="82" r="8" fill={BLUE} /><circle cx="116" cy="82" r="8" fill={PALE} stroke={INK} strokeWidth="2" />
      <rect x="66" y="100" width="68" height="6" rx="3" fill={PALE} />
      <circle cx="68" cy="130" r="7" fill={INK} /><circle cx="132" cy="130" r="7" fill={INK} />
    </>
  ),
  masques: (
    <>
      <path d="M46 56 Q100 40 154 56 V96 Q100 120 46 96 Z" fill="#7FB6F5" stroke={INK} strokeWidth="3" />
      <path d="M46 70 Q100 55 154 70 M46 83 Q100 68 154 83" stroke="#fff" strokeWidth="3" opacity=".7" fill="none" />
      <path d="M46 62 C18 62 18 92 46 92 M154 62 C182 62 182 92 154 92" stroke={INK} strokeWidth="3" fill="none" />
    </>
  ),
  gants: (
    <g fill="#4EA3F5" stroke={INK} strokeWidth="3" strokeLinejoin="round">
      <rect x="66" y="60" width="68" height="56" rx="14" />
      <rect x="66" y="30" width="13" height="42" rx="6" /><rect x="82" y="22" width="13" height="48" rx="6" />
      <rect x="98" y="22" width="13" height="48" rx="6" /><rect x="114" y="30" width="13" height="42" rx="6" />
      <rect x="126" y="72" width="36" height="14" rx="7" transform="rotate(-35 130 80)" />
      <rect x="74" y="112" width="52" height="16" rx="4" fill={PALE} />
    </g>
  ),
};

export default function ProductArt({ name }) {
  return (
    <svg viewBox="0 0 200 150" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <ellipse cx="100" cy="138" rx="62" ry="7" fill="#0B2545" opacity=".08" />
      {art[name]}
    </svg>
  );
}
